# EVMOS 开发环境
## 环境
* Ethermint RPC：http://evmos.lucq.fun
* Ethermint WS：http://evmosws.lucq.fun
* EVMOS RPC: http://evmosrpc.lucq.fun/
* EVMOS Swagger: http://evmosswagger.lucq.fun/
* Ethermint Chain Id: 9000
* EVMOS Chain Id: evmos_9000-1

## 私钥
```
- name: mykey
  type: local
  address: evmos1f4thrww06g2vnfpcaj768z9cqtdve422lfv7d9
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A9flxYsXAVoi72lh8n3ouVzxmORuF9/fz53lM+l4v5VR"}'
drop sick document govern plunge increase theory predict sand gown mirror coach plug guard song claim motor tip idle lesson brand consider anchor clap

- name: faucet
  type: local
  address: evmos1amgaxns59623jpwl3wl9xzxn2zw00lghwzd9qx
  pubkey: '{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"A1b0tJHwueZkj/Zp1lYgyLNJ3eknw0rUoF5pOXdvf+6a"}'
program enrich pistol boring dove resemble valley protect sentence double stereo major nature found silk gift goddess shadow shield nasty assume approve sock else

一个以太坊测试私钥：f78a036930ce63791ea6ea20072986d8c3f16a6811f6a2583b0787c45086f769 对应账号 0x00000be6819f41400225702d32d3dd23663dd690
```

# 验证列表
* Dev Env Setup	
	* 😄 EVM chain investigation & selection：EVMOS
	* 😄 Deploy & setup
	* 😄 Instruction/script to run one local nodes：http://wiki.lucq.fun/share/595c08cc-0103-4b9e-8193-4a00ae90b22e
	* Multi node by script not docker
	* To be a validator
	* Propose
* EVM Compatibility	
	* 😄 EVM Compatibility verification
	* 😄 Solidity smart contract support verification：至少支持solidity支持到了 0.8.9 版本了。
	* 😄 Hardhat development toolkit support verification
	* 😄 Metamask wallet support verification
* Two Native Token	
	* Two native token design & review
	* Two native token implementation
* Cross chain bridge	
	* ETH/ERC20 bridge
	* BTC bridge
	* Cross-chain support list
	* Other chain bridge
* On-Chain Goverance	
	* On-chain goverance design & review
	* On-chain goverance implementation
	* JS library support
* Throughput optimization	
	* TPS test script
	* TPS profiling
	* Optimization proposal & discussion
	* Optimization implementation


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.
Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
