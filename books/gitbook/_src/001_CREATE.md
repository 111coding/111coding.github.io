# Gitbook 생성

#### 1. github page repository clone 해오기
- 생략

#### 2. gitbook 배포할 폴더 만들기
- 생략

#### 3. gitbook 생성
```
$ gitbook init
```

#### 4. generate된 파일 구조

```
├── README.md            # 서적 소개(필수)
├── SUMMARY.md           # 목차 참조(선택)
```

#### 5. book.json 생성
    - gitbook 내에서 사용할 변수나 플러그인 등 설정하는 json type file

***변수선언 예제***

```
{
    "variables": {
        "BASE_URL": "https://111coding.github.io",
        "RAW_URL": "https://raw.githubusercontent.com/111coding/111coding.github.io/master"
    }
}
```

***변수사용 예제***

```
// {{ book.RAW_URL }}

![node-version]({{ book.RAW_URL }}/books/gitbook/_res/000_gitbook_version.png)
```

#### 6. 샘플 책 만들기
- README.md

```
# Gitbook 설치부터 배포까지
```

- SUMMARY.md

```
# Summary

- Gitbook
    - [Gitbook 설치](000_INSTALL.md)
```

- 000_INSTALL.md

```
# Gitbook 설치
```


#### 7. 최종 구조

```
├── book.json            # 기본 GitBook 구성 데이터(선택)
├── README.md            # 서적 소개(필수)
├── SUMMARY.md           # 목차 참조(선택)
├── 000_INSTALL.md       # 책내용
```
