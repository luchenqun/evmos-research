const WebSocket = require("ws");

(async () => {
  const ws = new WebSocket('ws://127.0.0.1:8546');
  const TxPoolId = 0;
  const TxId = 1;
  const NonceId = 3;

  let txpool = {
    "method": "txpool_status",
    "jsonrpc": "2.0",
    "id": TxPoolId,
    "params": []
  }

  let tx = {
    "method": "eth_sendTransaction",
    "jsonrpc": "2.0",
    "id": TxId,
    "params": [
      {
        "from": "0x746EA987393E94523231F53b5A9AF404d81917B7",
        "to": "0x1111102Dd32160B064F2A512CDEf74bFdB6a9F96",
        "value": "0x1",
        "gas": "0x7a1200",
        "gasPrice": "0x342770c1"
      }
    ]
  }

  let nonce = {
    "jsonrpc": "2.0",
    "id": NonceId,
    "method": "eth_getTransactionCount",
    "params": ["0x746EA987393E94523231F53b5A9AF404d81917B7", "latest"]
  }

  const txStr = JSON.stringify(tx)
  const txpoolStr = JSON.stringify(txpool)
  const nonceStr = JSON.stringify(nonce)
  let startNonce = -1;
  const startTime = parseInt(new Date().getTime() / 1000)
  const maxGap = 10 * 60; // 压测10分钟
  const maxPending = 10000; // 当交易池待上链交易最大数值

  ws.on('open', function open() {
    console.log('connected');
    ws.send(txpoolStr); // 查询交易池数量
  });

  ws.on('close', function close() {
    console.log('disconnected');
  });

  ws.on('message', function message(data) {
    data = JSON.parse(data.toString());

    if (data.id == TxPoolId) {
      let pending = parseInt(data.result.pending)
      console.log(`当前待上链交易数量为 ${pending}`)
      // 塞满交易池
      while (maxPending - pending > 0) {
        ws.send(txStr);
        pending++
      }
      // 等个1s再次查询交易池 以及 查询实际上链交易
      setTimeout(() => {
        ws.send(txpoolStr)
        ws.send(nonceStr)
      }, 1000)
    } else if (data.id == NonceId) {
      const nonce = parseInt(data.result)
      if (startNonce < 0) {
        startNonce = nonce
      } else {
        const endTime = parseInt(new Date().getTime() / 1000)
        const gapTime = endTime - startTime;
        const count = nonce - startNonce;
        const tps = parseInt(count / gapTime)
        console.log(`已上链交易数量为 ${count}, 花费时间 ${gapTime}, TPS为 ${tps}`)

        // 达到压测时间了，我们结束吧
        if (endTime - startTime > maxGap) {
          ws.close()
        }
      }
    } else {
      // 交易回来的回执不处理
    }
  });

})()