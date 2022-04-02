# Gitbook 설치

해당 튜토리얼은 MacOS 기반에서 작성.

Gitbook은 node.js 기반이기 때문에 ```node```와 ```npm```이 설치되어 있어야 한다. ```npm```은 ```node```설치 시 함께 설치되니 Homebrew 등을 통해서 ```node```를 설치하자.

설치 후 노드 버전을 확인하면 최신버전(작성일 기준 17.~)이 설치 된 것을 확인할 수 있다.
```
$ node -v
```

이때 유의할 점이 이 글을 쓸 때 최신버전에서 ```gitbook-cli``` 실행 시 제대로 돌아가지 않아서 한참 헤매다가 node version을 낮추고 나서야 제대로 실행이 되었다.
```
// npm 캐시제거
$ sudo npm cache clean -f

// node.js 버전을 관리하는 n 이라는 모듈 설치
$ sudo npm install -g n

// node.js 10.14.1 버전 설치
$ sudo n 10.14.1
```

- n version 적용 옵션

```
* n stable : 안정 버전
* n latest : 최신 버전
* n lts : lts 버전
* n x.x.x : 특정 x.x.x 버전
```

![node-version]({{ book.RAW_URL }}/books/gitbook/_res/000_node_version.png)

이까지 하고 ```gitbook -V```을 입력해 gitbook 버전을 확인해 보자

![gitbook-version]({{ book.RAW_URL }}/books/gitbook/_res/000_gitbook_version.png)

위와같이 CLI version과 Gitbook version이 출력된다면 모든설치는 끝!