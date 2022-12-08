# 비밀멋사
- 배포: https://secret-lion.netlify.app/
- 테스트 계정: bmms@test.com || 비밀번호 : bmms1234
 
![결과1](https://user-images.githubusercontent.com/96777064/206225813-571d5768-167d-4a2c-acc8-321b89f087b7.png)


'비밀멋사'는 온라인으로 진행하는 부트캠프 훈련생간의 더욱 활발한 소통을 위한 익명 커뮤니티 앱 입니다.


<br>

## 1. 프로젝트 설명

멋쟁이사자처럼은 온라인으로 진행되는 부트캠프입니다. 수강생들은 디스코드라는 플랫폼으로 함께 수업을 듣고, 정보를 공유하거나 대화를 할 수 있습니다. 하지만 100명의 수강생들이 다같이 소통하는 데에는 한계가 있다고 생각했습니다. 우리에게는 차마 나누지 못한 학업이나 취업에만 국한되지 않는 더 많은 이야기가 있을 것입니다. 비록 온라인에서 만났지만 같은 곳을 바라보며 나아가는 우리는 결속력과 친밀감을 느낍니다. 그렇기에 우리가 친구처럼 편하게 얘기할 수 있는 또다른 플랫폼을 만들고 싶었습니다. 익명으로 자유롭게 고민과 일상을 나누면서 서로의 힘이 되어주는 든든한 동료들의 존재를 느낄 수 있을 것입니다. 더 나아가 다른 온라인 부트캠프에서도 동료 훈련생분들과 함께 사용할 수 있는 앱으로 확장하는 것을 목표로 합니다.


### 1.1 프로젝트 사용 기술  
**FrontEnd** <div><img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"></div>
  <br>
**BackEnd** <div>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white"></div>
  <br>
**Collaboration** <div><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"></div>
  <br>
### 1.2 해당 기술 사용 이유

<br>



## 2. 팀원
| **강수정** | **김민제** | **문승규** | **백경현** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/110231276?v=4" height=150 width=150> <br/> @kngsujng](https://github.com/kngsujng) | [<img src="https://avatars.githubusercontent.com/u/112460466?v=4" height=150 width=150> <br/> @Cheorizzang](https://github.com/Cheorizzang) | [<img src="https://avatars.githubusercontent.com/u/84954439?v=4" height=150 width=150> <br/> @munseunggyu](https://github.com/munseunggyu) | [<img src="https://avatars.githubusercontent.com/u/96777064?v=4" height=150 width=150> <br/> @baekg6](https://github.com/baekg6) |

<br>

## 3. 역할분담
**강수정**

**김민제**

**문승규**

**백경현**
- 프로젝트 기획 및 문서화
- UI  
  - 게시판 컴포넌트화
  - 메인 페이지 구현
- 기능
  - 게시판 정렬, 카테고리 

<br>

## 4. 세부 기능
### 4-1. 홈
<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206344279-4330a9ed-b3f8-445c-a7f3-0384daa01fc6.gif"
                    alt=""></td>
            <td>홈/스플래쉬<ul>
                    <li>시작하기 버튼을 통해 서비스에 접속할 수 있습니다.</li>
                    <li>로그인: 게시판으로 이동</li>
                    <li>비로그인: 로그인화면으로 이동</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206368007-9db9431e-b994-4722-b8cd-4c736fbbf838.gif"
                    alt=""></td>
            <td>로그인<ul>
                    <li>유효성 검사를 진행하고, 오류 메시지를 제공합니다. </li>
                    <li>이메일과 비밀번호가 유효한 경우 게시판 화면으로 이동합니다.</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206364349-eee1a076-cad5-4557-a64a-c6849be2b31e.gif"
                    alt=""></td>
            <td>회원가입<ul>
                    <li>사용자의 정보를 입력받아 회원가입을 진행합니다.</li>
                    <li>유효성 검사를 진행하고, 오류 메시지를 전달합니다.</li>
                    <li>모달창을 이용하여 커뮤니티 규칙과 개인정보 수집/이용 동의를 제공합니다.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
    
    
### 4-2. 게시판
<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206362695-bb6ce29b-e237-4a84-9484-510dccd71902.gif"
                    alt=""></td>
            <td>게시판<ul>
                    <li>인기/최신으로 게시글 정렬 순서를 변경할 수 있습니다.</li>
                    <li>드롭다운으로 카테고리를 지정할 수 있습니다.</li>
                    <li>이미지가 업로드 되지 않은 게시글은 카테고리별 기본 이미지를 제공합니다.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### 4-3. 게시글
<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206362715-29245407-b1b6-498b-96db-adff583e1cde.gif"
                    alt=""></td>
            <td>업로드<ul>
                    <li>드롭다운 메뉴를 통해 게시글의 카테고리를 설정합니다.</li>
                    <li>첨부파일 선택 버튼을 이용하여 이미지를 업로드할 수 있습니다.</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206362705-c6db6f3f-e2db-4891-af76-e4f6eb4d8f76.gif"
                    alt=""></td>
            <td>게시글<ul>
                    <li>좋아요/스크랩이 가능하며, 댓글을 게시할 수 있습니다.</li>
                    <li>작성한 게시글에만 삭제 버튼이 활성화되어, 작성자만 삭제할 수 있습니다.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### 4-4. 프로필
<table>
    <tbody>
        <tr></tr>
        <tr>
            <th>시연</th>
            <th>설명</th>
        </tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206362738-6603d18b-5f62-4a34-9f55-6d2c4f7cecbc.gif"
                    alt=""></td>
            <td>프로필<ul>
                    <li>사용자의 프로필 정보를 제공합니다.</li>
                    <li>작성한 게시글, 좋아요, 스크랩한 게시글의 목록을 확인할 수 있습니다.</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td><img src="https://user-images.githubusercontent.com/96777064/206362728-9f41d01b-eabe-41c6-8507-54f612dc4fdd.gif"
                    alt=""></td>
            <td>프로필 편집<ul>
                    <li>프로필 이미지를 변경하거나, 업로드한 이미지를 삭제할 수 있습니다.</li>
                    <li>새로운 닉네임의 중복 여부를 확인한 후 변경합니다.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
