---
layout: post
title:  "DailyStudy"
categories : DailyStudy!
date:   2019-08-13
---



August.13.2019  (TUE)

---

# **Learned Today**

#  

## 1. 블록체인



### 1) 블록체인이란?

* 블록(Block)과 체인(Chain)의 합성어로 거래 내역이 담긴 블록을 체인처럼 엮어서 분산 저장하는 기술.
* 다른말로 분산원장기술(Distributed Ledger Technology) 라고도 함
* 비트코인 등 암호화폐의 기반이 되는 기술
* 블록체인에 대한 다양한 정의

### 2) 블록의 연결

* 블록은 순서대로 연결되며
* 이전 블록의 해시값을 가지고 있다.

### 3)블록체인 거래 방식

* 기존 거래 방식 
  : 은행(중앙)이 모든 거래내역을 장부로 관리

* 블록체인 거래 방식
  : 분산된 장부를 통한 투명한 거래내역 유지

  

* 분산 장부
  : 비트코인의 경우 10,000개 정도의 분산 장부 유지

### 4)블록체인 거래 검증

* 누가 검증할 것인가?
  : 검증자가 한 컴퓨터이면 해당 컴퓨터만 공격하면 전체 장부를 위조 가능

* 블록체인 거래 내역 검증

  * 매 블록마다 검증자를 바꿈
  * 어떤 컴퓨터가 다음에 검증하게 될 지 모르는 구조
  * 참여자가 많을 수록 예측이 어려워짐
  * 검증을 위해 경쟁하는 시스템

* 블록체인 검증 안전장치

  * 검증을 위한 경쟁 시 '비용'이 발생
    : 많은 돈을 쓰는 사람이 경쟁에서 유리

  * 경쟁에서 이긴 검증자에게 합당한 보상

    :경쟁에서 이기더라도 검증을 잘 못하면 보상을 받지 못함
    :경쟁에서 이기면 새로운 화폐를 발행해서 보상

### 5)블록체인 장부의 조작

* 장부의 조작
  * 내가 가진 돈보다 더 큰 금액을 사용
    :유효성 검증에서 통과하지 못함
  * 이미 썻던 내용을 없애고 다시 사용
    :이미 썻던 내용은 이전 블록 어딘가에 저장
    :해당 블록을 위조하기 위해서는 그 이후 모든 블록에 수정이 들어가야함
* 공격자 입장
  * 블록을 생성하거나 조작하기 위해서는 더 많은 컴퓨팅 파워가 필요 (비용 발생)
  * 더 많은 비용을 들였다고 해서 블록 생성 권한을 얻는다는 보장이 없음
  * 특정 블록을 수정하면 그 불록에 연결된 체인이 다른 사람들이 가진 체인보다 더 길어야 네트워크에서 살아남음



### 6)블록체인 기술의 장점

* 분산 컴퓨팅 파워
  : 중앙 시스템에 의한 운용이 아닌, 분산된 컴퓨팅 파워를 이용
* 위,변조 불가

### 7)핵심 개념  

**네트워크**

* 퓨어 P2P
  * 인덱스 서버 없이 직접 노드간 연결
  * 주변 노드 탐색 필요
  * 네트워크 구조 제어 안됨
  * 장애 대응 및 확장성 좋음
* 하이브리드 P2P
  * 노드의 검색 정보를 서버에 기록
  * 인덱스 서버에 노드 정보 저장
  * 연결 이후 데이터 전송은 Peer 끼리 직접

**해시 연산**

* 데이터의 무결성을 보장하는 기술
  * 무결성(Integrity)은 데이터를 누구도 쉽게 변조 할 수 없으며,
  * 변조했다고 하더라도 그 사실을 바로 알아차릴 수 있는 특성
* 해시(디지털 지문, DNA)
  * 특정한 데이터를 이를 상징하는 고정 길이의 데이터로 변환
  * 원래의 데이터가 조금만 달라져도 확연하게 달라지는 특성.
  * 복호화 (역변환) 불가, 비가역 함수
* 해시 알고리즘
  * 대표적인 해시 알고리즘은 MD5, SHA-1, SHA-256 등

**해시 사용**

* 계좌 생성
  * 프라이빗 키 -> 퍼블릭 키 -> 계쩡 주소 과정에서 사용
* 트랜잭션 머클 트리
  * 각 트랜잭션을 해시로 처리해서 거래 내역의 위변조를 방지
* 블록체인 연결
  * 앞 블록의 해시값으로 다음 블록 연결

**공개키 및 지갑주소**

* 개인키 - 무작위 숫자를 이용해 256bit 개인키 생성
* 공개키 - 개인키에 ECDSA를 적용해 생성
* 지갑주소 - 공개키를 이용해 생성

**블록**

* 유효한 트랜잭션들의 집합, 블록체인 작업증명의 결과
* 블록체인의 블록은 블록헤더 + 트랜잭션으로 구성
* 트랜잭션 정보의 무결성 검증을 위해 머클 트리 사용.
* 비트코인 블록 크기 : 1MB 가량, 약 2000개 트랜잭션 포함
* 제네시스 블록
  * 해당 블록체인의 가장 첫번째 블록
* 블록 높이
  * 제네세스 블록 이후 블록이 추가될 때마다 1씩 증가
  * 현재까지 연결된 블록의 총 수

**합의 알고리즘**

* 합의 내용
  * 블록 생성 권한을 누구에게 줄 것인가
  * 체인 분기 발생 시 메인 체인을 선택하는 방법
* 합의 알고리즘의 종류
  * PoW(Proof of Work) : 작업 증명
  * PoS(Proof of Stake) : 지분 증명
  * DPoS(Delegated proof of Stake) : 위임 지분 증명
* 작업증명(PoW) 알고리즘
  * 서비스 제공자가 제시한 특정 작업을 완료해야 사용자가 서비스 이용 가능
  * 작업을 하기는 어려워도 '작업 완료' 검증은 쉬운 작업









---

