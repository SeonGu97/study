(22.01.10)
- 오늘은 게시판을 만들어 보기로 했다. 어떤 게시판을 만들 것이냐면, 헤더 부분은 게시판 종류의 리스트들이 있고, 메인 부분은 두가지로 나뉘는데 메인부분의 상단 부분은 검색창이 있고, 아래에는
게시판 리스트들이 최대 10개까지 있고, 10개가 넘어가면 풋터의 넘버 목록이 추가 된다. 게시판을 만들면 저장이 되도록 스토리지를 사용할까 생각중이다. 일단 대충 레이아웃만 잡았고 내일부터 본격
만들어볼것이다.

(22.01.11)
- 오늘은 거의 모든 레이아웃을 만들었다. 나중에는 디자인을 바꿀 것이지만, 일단 큰틀의 레이아웃은 만들어졌다.
여기서 기능을 추가하고, 조금의 스타일 추가/수정 하면 된다. 일단 헤더의 리스트 목록을 추가, 메인의 검색창/게시판 목록 추가, 푸터의 이전/다음 버튼 추가 정도를 했다.
오늘 개인사정이 있어서 많은 시간을 소비했지만, 일단 집에와서 바로 추가를 조금 했다. 내일은 디자인 추가/수정 하거나 기능을 추가 할 것 같다.

(22.01.12)
- 오늘은 기존 레이아웃을 조금 변형하기로 했다. 일단, 네이버 카페를 보고나서 비슷하게 만들어 보려고 했다. 그리고 거기에 내가 생각하는것 까지 합쳐서 카피와 개성을 더해서 만들어 볼까한다.
좌측에 게시판의 종류를 볼수있도록 목록을 만들어 놓고 그 목록 아래나 위에 조그만 설정 아이콘을 만들어서 누르면 새로운 게시판 목록을 추가하는 것도 만들어 볼까한다. 그리고 목록을 바꾸면 게시판도
바뀌어야 하는데 이 기능을 어떻게할지 생각중이다. 회사같은 곳이면 서버를 이용해서 불러올텐데 혼자 만드는 것 이기 때문에 게시판에 글을 추가해서 저장이 되려면 스토리지를 이용하고 만약
게시판의 글이 10개가 넘어가면 2페이지로 넘어가야하는데 이런 페이지 넘어가는 기능도 생각을 좀 더 해봐야겠다.

(22.01.13)
- 오늘은 게시판을 어떻게 만들지 계획을 만들었고, 일단 설정 버튼을 만들어서 하나의 박스가 나오게 만들고 설정버튼은 톱니바귀 모양의 아이콘으로 한다. 누를때마다 한바퀴씩 돌아가는 이펙트를 만든다.
그리고 박스도 줄어들면서 들어가고 커지면서 나온다. 그리고 박스안에 게시판을 추가할수 있는 기능을 만든다. 이기능은 스토리지를 사용한다. 내일은 이기능을 완성해야겠다.


(22.01.14)
- 오늘은 로컬스토리지를 통한 게시판 추가기능을 만들었다. 일단 만들었다 지웠다를 반복하면서 느낀점은,
일단 input:text를 만들어서 타이핑으로 게시판 이름을 입력하고, submit 버튼으로 타이핑한 벨류를 로컬스토리지에 보낸다.
로컬스토리지에 보내서 로컬스토리지의 length가 추가되면 게시판 아이템을 추가하고 추가된 아이템에 스토리지에 저장한 벨류로
inner text해서 제목을 넣어준다. 로컬스토리지에 저장이 되있어서 새로고침해도 추가한 게시판이 유지가 된다. 내일은 지우는 기능을 만들어야 겠다.  

(22.01.17)
- 오늘은 리펙토링을 했다. 지금까지 코딩을 하면서 엘리먼트를 만들고 속성을 부여하고 엘리먼트를 집어넣고 하는 과정이 반복적이였는데,
사실 큰 불편이나 잘못 만들고 있다는 생각을 전혀 못했다. 근데 오늘 천천히 보니까 반복적인 작업이 계속 되어서 엘리먼트를 만드는 기능을 만들었다.
함수에 매개변수에 엘리먼트 개수, 변수 이름, 만들 태그, 속성 타입, 속성 벨류등을 입력하면 엘리먼트가 생성이 된다. 기존에는 스크립트마다 계속 createElement, setAttribute, appendChild등 반복적으로
사용을했는데 이번에는 숫자를 담고있는 변수와, 프로퍼티를 담고있는 변수 그리고 함수하나 이 세개면 원하는 엘리먼트에 원하는 속성 원하는 개수등.. 만들 수 있다.
함수 한줄로 만들고 싶었는데, 힘들 것 같다. 일단 숫자를 담고 있는 변수는 몇개를 만들지 정하는 것이고, 프로퍼티를 담고 있는 변수는
속성이 여러개 즉.. 예를 들어서 class 하나만 쓰면 굳이 상관 없겠지만 class, type, id 등등 하나의 엘리먼트가 여러개의 속성을 사용을 하는 경우가 있기 때문에\
프로퍼티에 담아서 쓰고있다. 일단은 정말 편리하다. 오바를 하자면 프레임워크를 사용하는 느낌?? 오늘 이 기회를 통해서 조금더 코딩을 하는 실력이 늘었고, 세심하게 짜야겠다는 생각이 들었다.
내일은 일단 다시 기존 디자인으로 만들어 놓고, 조금더 편하게 자동화로 최소한의 노동력으로 최대의 효율을 낼수있는 코드를 만들수 있나 생각해봐야겠다.

(22.01.18)
- 오늘은 어제 만들어 놓은 엘리먼트 생성기로 디자인을 만들려고 했는데, 생성기에 빠진게 있어서 오늘 다시 만들었다.
어제 만든 생성기로 잘 만들다가 엘리먼트 안에 텍스트와, 아이콘을 넣어야 하는데 이 기능을 구현 하지 못했다. 또 엘리먼트를 여러개 만들었을때 각기 다르게 텍스트와 아이콘을 넣을수도 있게 만들어야한다.
그래서 어제 만든 생성기를 수정/추가했다. 어제와 같이 쓰잘데기 없는 num변수나 box프로퍼티를 안만들어도 되고, 코드 한줄로 가능하게 만들었다.
코드는 이렇다. this.Getter(변수이름, 만들태그, 만들개수, 속성이름, 속성벨류, 넣을텍스트or아이콘, 만들어진 엘리먼트를 넣은 부모);
이 함수의 매개변수에 값을 넣어주면 엘리먼트가 자동으로 생성된다. 속성이나 텍스트or아이콘도 여러개 정의가 가능하다. 이로써 이 함수 한줄만 사용하면 엘리먼트를 만들수 있기때문에 엄청난 코드의 양이 줄어들고, 속도도 빨라질 것 같다.
내일은 이 만든 함수로 게시판을 마저 만들어야겠다.

(22.01.19)
- 완성된 엘리먼트 생성기로 만드는데, 벽에 부딫혔다. 로컬스토리지를 만드는 부분에서 기존 코드에서 리펙토링 하는데 로컬스토리지에는 잘 저장이 된다.
문제는 이 저장된 로컬스토리지의 문자열을 가져와서 엘리먼트에 넣고 생성을 해야되는데 이부분이 문제다. 몇시간째 해봐도 잘 안된다. 그래서 머리좀 식히고 다시 차분히 생각해봐서
만들어야겠다. 이 부분을 잘 만들어야 로컬스토리지 삭제기능도 잘 만들수 있기 때문이다. 그래서 내일은 로컬스토리지의 문자열을 잘 받아서 엘리먼트가 생성되게 만들어야겠다.

(22.01.20)
- 오늘은 로컬스토리지의 문제를 해결했다. 문제는 이러했다. 게시판의 목록을 하나 초과로 추가하면,
예를들어 1, 2 이렇게 두개를 추가하면 1, 1, 2 이렇게 되고, 세개를 추가하면 1, 2, 1, 2, 3 이렇게 된다.
즉 추가하기 전의 목록이 사라지지 않고 그 목록에서 새로 추가된 목록이 통째로 추가된다. 그래서 이전 목록을 모두 삭제하는 함수를 만들었다. 그랬더니 해결이 됬다.

(22.01.21)
- 아까 만들어 놓은 거에 디자인을 넣었다. 레아이아웃을 잘못짜서 수정하고, 스타일을 추가했다. 일단 다시 복구를 했고, 다음은이제
삭제기능을 만들어야할 차례이다.

(22.01.24)
- 오늘은 다시 짜놓은 레아아웃에 스타일을 더 추가했고, 지우기 기능을 다 만들지는 못했지만, 지우기 모드 부분을 만들어서 버튼을 눌러서 on / off 해서 on을 하면 게시판 리스트들 옆에 쓰레기통
아이콘이 나오도록 만들었다. 이제 아이콘을 누르면 삭제되는 기능만 만들면된다. 이건 내일이면 충분히 만들 것 같다. 일단 수정을 많이 하지만 그만큼 코드도 좋아지고 있다. 반복해서 다시 만드는 만큼
익숙해지고 어려움이 줄어든다. 최근들어 이런 반복 작업을 많이 하면서 코드를 짤때 생각을 조금더 하는 것 같다.

(22.01.25)
- 오늘은 삭제기능을 만들려고 했으나! 어제 만들어논 삭제기능 레이아웃이 잘못되서 새로 고쳤다. 어제 만들면서도 아쉬운 부분이 있었는데, 그것도 수정했다. 진짜 진짜 내일은 삭제기능을 만들면된다.
일단 오늘 만든건 삭제모드 on / off 버튼을 눌렀을때, 만약에 삭제모드를 on한 상태로 설정 창을 닫으면 off되도록 만들고, 스타일도 조금 바꿨다. 뭔가 매일 크게 진도는 못나가는데 수정하는데 시간이
너무 많이든다. 내가 부족하다는 증거이기도한데, 한번에 잘 만들고싶다. 그럴려면 이러한 과정이 힘들고 지루해도 참고 견뎌야한다. 내일은 실수없이 잘 되기를 바란다.

(22.01.26)
- 오늘은 게시판 삭제기능을 만들었다. 역시 완성은 못했다. 내일 대체적으로 다시 만들어야 할 것같다. 일단 문제점은 게시판을 삭제하면서 로컬스토리지도 같이 삭제하는데 그런 뒤에 리스트를 추가하면 
삭제된 스토리지 배열이 돌아온다. 이유는 입력 로컬스토리지와 삭제 로컬스토리지를 따로 만들어서 따로 놀기 때문 인것같다. 그래서 내일은 또! 모두 갈아 업고 다시 만들어야한다. 오늘도 실수를 통해서
나의 부족한 점을 또 발견했다. 요번주 내에는 무조건 삭제기능 이상의 진도를 나가야한다.

(22.01.27)
- 오늘은 로컬스토리지로 게시판을 만들고 삭제하는 기능을 만들었다. 조금 보완해야할 것이 있지만 충분히 보안이 가능하기 때문에 문제는 없다. 드디어 성공이 고지다. 스토리지 다루는 방법을 전에도 했었는데
그때 제대로 하지 않았나보다. 투두리스트때 엄청 만들었는데, 기억이 잘 나지않았다. 그래도 요번에 확실하게 머리에 박아둬서 스토리지는 어느정도 다루게 되었다. 내일은 문제점 보안이랑 스타일 마저 작업을 해야겠다.

(22.01.28)
- 오늘은 게시판 추가와 삭제 디자인까지 모두 완성을 했다. 정말 시간이 많이 걸렸다. 약 3주 정도 시간이 소요됬다. 생각보다 너무 오래걸렸다.
그래도 별것 아닌것 같지만 너무 뿌듯하다. 이제 이 게시판이랑 연결해서 옆에다가 실제 게시판을 만들어야겠다. 글쓰고 올리고 하는 게시판 말이다.
아직 어떻게 만들지 생각은 안했지만 스토리지를 이용해서 데이터를 받아와서 만들까 생각중이다. 만드는라 고생한 나 칭찬하고, 만들면서 많이 실력도 성장하고, 부족한 부분도 찾을 수 있게되었다.
메인 게시판을 만들때는 좀더 실수를 덜하고 만들어야겠다.

(22.02.07)
- 저번주는 설날이라서 일주일을 그냥 쉬었다. 많이 쉰거 같은 느낌이 있는데 그래도 설날끼고 쉬는거라 2틀정도 더 쉬었다.
오늘은 일단 저번주에 만들어논 게시판 목록을 추가, 삭제하는 기능을 조금 만져보다가 버그 하나가 있어서, 수정을 했다. 그리고, trash버튼이 생겼을때 조금 타이트하게 생기는거 같아서 aside에 패딩을 주고 여유가 생겨서 trash버튼을 옮겼다.

(22.02.08)
- 오늘은 어제 수정한 사이드 게시판이 조금 불편한 점이 있어서 수정하고, 메인 게시판 부분으로 넘어갔다. 일단, 사이드 게시판과 구역을 나누고, 사이드 게시판의 목록을 누르면 그 목록의 이름을 가져와서 메인 게시판의 타이틀에 넣는다. 그리고, 다음 기능은 클릭한 목록의 순번에 맞는 게시판을 띄워야 하는데, 일단 jquery라면
index로 편하게 할 수 있겠지만, 자바스크립트는 그런 기능이 없다. 그래서 생각해본게 특정 클래스를 사이드 게시판의 목록과 메인 게시판의 목록에 똑같이 주고, 사이드 게시판을 누르면 그 목록의 클래스와 같은 메인 게시판의 목록을 띄우는 것이다. 일단 클래스는 부여해놨고 내일 만들어 보면 될 것 같다.

(22.02.09)
- 오늘은 어제 만들고자한 기능을 만들긴했다. 하지만 다른곳에서 문제가 생겨서 고쳐야한다. 너무 지친다. 아마도 처음부터 다시 만들어야 할 것 같다. 
여기저기 다시 만져야 할 부분이 너무 많은 것 같다. 사실 게시판을 만든다는게 쉽지는 않는게 맞지만, 자바스트립트로 그것도 서버의 도움도 없이 만든다는건 더 힘든일이다.
그래도 한번 만들어 보고 싶다. 어줍잖게 돌아가도 말이다. 내일은 힘들겠지만 처음부터 다시 만들 생각이다. 부시고 만들고 반복하다 보면 정신적으로 너무 힘들지만 결과적으로는 끝났을때 많은 성장이 되있을 것이다.

(22.02.10)
- 오늘은 게시판을 다시 만들기 시작했다. 이번에는 모듈로 안만들고 그냥 자바스크립트로 만들었다. 엘리먼트 생성기로 몇몇 엘리먼트를 생성해놓은게 다이다. 그래서 요번주 안에는 다시 원상복구 할 것이다.

(22.02.11)
- 오늘은 컨디션이 좋지 않아서 조금만 코딩하고 쉬었다. 목에 담이 온것 같다. 게시판을 빨리 만들어야 하는데 길어진다. 다음주부터 분발해야겠다.

(22.02.14)
- 오늘은 일단 사이드부터 다시 만들었다. 원래는 게시판을 추가하면 게시판 목록만 추가가 됬는데, 이번에는 메인의 보터에 리스트들도 같이 추가가 되도록 만들었다. 지금까지는 만드는데 문제가 없다.
오히려 코드가 더 깔끔해진 느낌 필요한 코드들만 있는것 같다. 이제 삭제 기능과 자잘한 기능만 넣으면 기능적으로는 거의 완성이다. 디자인만 만들면 되는데 사실 기능은 어떻게든 시간을 들여서 만들수
있지만, 디자인은 오랜시간 경험을 통해서 만들어 지는거라 아직은 디자인적인 면에서는 부족하다. 일단 요번주 안에는 거의 막바지에 들지 않을까 생각한다.

(22.02.15)
- 오늘은 모드 기능을 추가했다. 게시판 삭제모드인데 뭔가 코드도 기존보다 간단해 진 것 같다. 역시 생각하면서 만들면 코드가 깔끔하게 만들어 지지 않는다 이미 만들 방법을 알고 만들어 봤다면
조금더 효율적인 코드로 짤 수 있다. 일단 모드 변경 버튼으로 목록 옆에 지우는 버튼을 추가하고 없애는 기능까지만 만들었다 내일은 실제로 지워지는 기능도 추가하고, 또 부족한 것도 추가하고
사이드는 거의 마무리가 되지 않을까 싶다.

(22.02.16)
- 오늘은 목록 지우기 기능을 만들었다. 하지만 부족한게 있어서 아직 만들었다가 지웠다. 무슨 문제냐면 일단 목록을 만들어서 모드기능을 키고 지우기 버튼을 누르면 엘리먼트랑, 스토리지랑 같이 지워져서
잘 작동이된다. 하지만 모드 기능을 키고 목록을 추가하면 추가한 목록의 삭제버튼이 작동을 하지 않는다. 왜그러냐면 일단 목록을 생성하고 새로 생성된 목록이 클릭이벤트에 적용이 안된것이다. 이걸 해결하려면
생성하는 곳에서 셀렉터를 정의해서 파라미터로 넘겨주면 되는데 기능상 넘겨주기가 어렵다 조금더 생각해봐야겠다.

(22.02.17)
- 오늘은 목록을 만들고 지우는 버튼이 안되는걸 고쳤다. 이것저것 만들어보니까 하나가 딱 됬다. 그래서 문제는 해결이 됬다. 내일은 지우는 기능 추가, 메인에 리스트도 같이 추가 하면 복구 완료다.
그 다음은 글쓰기 기능인데 스토리지를 이용해서 만들면 가능할 것 같다.

(22.02.18)
- 어제 고친 지우기 버튼이 다시 고장났다. 그래서 곰곰히 생각해서 아이디어가 떠올랐다. 처음에 엘리먼트를 만들때 넣는 프로퍼티들이 무엇이 있었나면, 
변수 이름, 엘리먼트 이름, 속성, 속성 이름, 넣을 텍스트, 부모, 개수 이렇게 있었는데 여기에서 생각해낸게 엘리먼트를 만들때 이벤트를 적용해서 만드는 생각이다. 그래서 엘리먼트를 만들때 이벤트를 추가하는 함수를 만들고
엘리먼트를 생성해보니 함수하나로 몇개를 만들던 제어가 가능했다. 그래서 성공적으로 목록이 지워졌다. 다음은 나머지 못만들걸 다시 만들고, 메인 부분을 빨리 채워야겠다.

(22.02.21)
- 오늘은 저번주에 만들어놓은 목록 지우기기능에 이어서 메인 리스트들 생성과 삭제 그리고 zindex를 넣어주었다. 중간에 만들면서 조금의 오류가 있었지만 바로 고쳐냈다.
내일은 메인 디자인 만들고 시간이 남으면 기능을 만들면 될 것 같다.

(22.02.22)
- 오늘은 리디자인을 했다 만들다보니까 기존 fixed로 레이아웃을 짠게 실수였다. 메인을 만들려고 보니까 반응형이 안될거 같아서 다시 리디자인을 했다 만들면서 코드도 한층 나아졌다.
엘리먼트를 담을 div를 가운데로 위치하면서 반응형이 편리하게 만들었다. 설정버튼, 게시판추가,삭제 기능을 왼상단 게시판 목록을 우상단 그리고 메인을 하단전체로 나뉘었다. 전보다 디자인은
괜찮아진 것같다. 오늘은 게시판추가 그리고 스토리지 그리고 디자인을 만들었고 내일 마저 다 만들어야겠다.

(22.02.23)
- 오늘은 일이 있어서 코딩을 많이 못했다. 내일은 정말 마저 다 만들고 진도를 나가야한다. 거의 한달넘게 제자리걸음? 을 하고있긴한데 코드는 조금씩 나아지는 중이라 그나마 위안이다.
내일은 열심히 마저 다 만들어야겠다.

(22.02.24)
- 오늘은 어제 다 만들기로한 기능을 다 만들었다. 일단 어제랑 또 조금 다른 레이아웃으로 바꾸었고 게시판 목록 생성과 함께 게시판도 같이 생성했다. 그리고 게시판에 게시판 목록이름도 같이 붙이고,
이제 글쓰기 부분을 만들기 시작했다. 일단 오늘은 글쓰기 버튼을 누르면 글쓰는 창이 나오고 없어지게 만들었다. 글쓰기는 어떻게 만들 생각이냐면, 일단 글쓰는 창은 하나로 통일한다. 원하는 게시판을
누르고, 글쓰기를 눌러서 제목과, 올릴 게시판 그리고 내용을 입력해서 저장버튼을 누르면 게시판이 생기면서 내용이 저장되고, 스토리지에도 저장해서 새로고침해도 저장이 되도록한다. 이제 거의 막바지에 다다랐다.
나머지도 열심히 만들어야겠다.

(22.02.25)
- 오늘은 게시판의 글쓰기 부분의 디자인을 했다. 약속이 있어서 코딩을 많이 못했다. 일단 만들면서 생각한게 생성한 게시판 하나당 스토리지가 2개는 필요할것 같다. 다음은 목록 개수에 맞게 하나에 두개씩 스토리지를
만들어주는 함수를 작성해야겠다. 그래야 게시판이름과 내용을 저장 할 수 있기때문이다. 다음은 이것만 해결하면 거의 완성이다. 

(22.02.28)
- 오늘은 코딩을 많이 못했다. 일단 게시판을 추가하면 스토리지도 추가되게는 만들어놨다. 컨디션이 좋지 않아서 내일 만들어야겠다.

(22.03.01)
- 오늘은 게시판을 작성한후 제목과 내용을 저장하는 기능을 구현했다. 아직 완성은 아니다. 일단 스토리지 부분을 완성이 됬는데, 엘리먼트를 생성하는게 문제이다.
글쓰기를 누르고 제목과 내용을 입력후 저장할 게시판을 선택하면 해당 게시판 제목과 같은 스토리지에 제목과 내용이 저장이된다. 그래서 이 저장된 내용을 가지고 엘리먼트를 만들면 되는데
문제는 여러 게시판중 해당 게시판에 엘리먼트를 만들어야하는데, 엘리먼트를 생성하는 과정에서 그게 조금 복잡하다. 그래서 아직 생각을 좀더 해봐야겠다. 만드는 과정중에서 만들고 특정 엘리먼트로
넣는것이 문제이다. 만약 첫번째 게시판에서 글쓰기를 하면, 첫번째 게시판으로가고, 두번째 세번째에서 작성을하면 해당 게시판에 저장이 되어야하는데 이부분이 문제이다. 해당 게시판의 엘리먼트를 특정하기
어렵기 때문이다. 그래서 따로 스토리지를 만들어야하나, 아니면 다른 방법이 있는지 생각해봐야겠다. 이 부분이 해결이되면 글쓰고, 작성한 글이 저장이되서 엘리먼트로 나타나는 즉, 완성에 정말 가까운 기능이다.
아마 저장된 스토리지 정보로 엘리먼트를 생성하는 것과 반대로 특정 게시판의 특정 게시물을 지우는 기능, 이 두가지 기능을 만들면 완성이라고 보면될 것 같다. 이후는 다듬기만 하면 되기 때문이다.
일단 가장 중요한 이 두기능을 구현할 방법을 생각해야겠다.

(22.03.02)
- 오늘은 어제 만들지 못한 기능을 만드는데 시간을 썼다. 일단 오늘도 만들지 못했다. 문제가 무엇이냐면, 예를들어 게시판을 2개만들었다고 가정하면, 그 2개의 게시판에 여려개의 게시글들이 들어갈텐데,
첫번째 게시판의 개수와, 두번째 게시판의 개수가 따로기 때문에 게시물을 넣는 과정에서 어떻게 해야할지 모르겠다. 너무 복잡하고, 까다롭다. 조금더 만들어보고 생각해봐야겠다.

(22.03.03)
- 난관에 봉착했다. 게시판을 만들고 저장하는게 아이디어가 나오지 않는다. 어떻게 만들어야할지 감이 안잡힌다. 천천히 여러가지 만들면서 하다보면 될줄 알았는데, 모르겠다. 다음주에도 이걸 완성할수 있을지 모르겠다.

(22.03.04)
- 밤을 꼬박 새면서 2틀동안 골치였던 기능을 완성해냈다. 일단 방법은 이러하다. 이전에는 글쓰기를 들어가서 제목과 내용을 입력하면, 그 제목과 내용이 스토리지에 담겨서 그걸 꺼내 쓸 생각이였다.
근데 여기서 한가지를 더 추가했다. 바로 그 제목과 내용에 태그를 감싸는 것이다. 그래서 이 녀석들을 넣어야하는 엘리먼트에 innerHTML을 하면 태그로써 생성이된다. 말로는 쉽지만 정말 완성하는데 너무 심적인 스트레스가 많았다.
그리고 여기서 문제가 하나더 생겼다. 1개이상의 배열을 innerHTML하면 예를들어) 제목1 내용1, 제목2 내용2 이렇게 넣으면 두개의 엘리먼트가 생성되는데 문제는 innerHTML로 넣는거라 중간에 ,(쉼표)도 같이 출력이된다.
물론 이렇게 "안녕하세요, 반갑습니다" 하나의 문자열에 있다면 제거가 쉽겠지만! ["안녕하세요", "반갑습니다"] 이러한 배열에서 문자열 사이에 구분이 되는 쉼표 자체도 출력이되서 문제였는데, 이것저것 사용해보다가
toString 프러퍼티를 사용해서 해결했다. 배열을 문자열로 반환해서 replace로 ,(쉼표)를 없애고 그걸 바로 innerHTML로 사용하니까 깔끔하게 잘 나왔다. 이제 만든 게시글의 스타일을 꾸미고,
마지막으로 게시글을 지우는 기능을 만들면 끝이다. 물론 지우는 기능도 만만지않게 어려울것 같다. 많이 만들어보고 많이 생각해보고 계속해서 만드는게 답인 것 같다.

(22.03.07)
- 오늘은 글쓰기 기능에서 추가/수정을 했다. 저번주에 글쓰면 저장이 되는 기능을 구현하고, 중간에 콤마가 있어서 replace를 통해 없애고 했는데, 오늘 다시 기능을 써보니까 첫번째 콤마만 사라지고 이후는 계속 생겨서 코드를 다시 수정했다.
그리고 또, (번호 제목 날짜)로 나타나게 만들고 싶었다. 일단 제목은 기존에 만들어놔서 그대로 쓰고, 내용 부분은 없애고, 번호를 어떻게 만들까 생각했는데, 스토리지의 개수를 가져와서 넣고, 그리고 Date객체를 사용해서 날짜를 가져왔다.
그래서 예를들어 글쓰기를 작성하면  1  안녕하세요  2022.3.7 이런식으로 생성이 된다. 이제 다음 기능은 엘리먼트를 하나 만들어서 만들어진 게시판을 클릭하면, 해당 게시판을 보여주는 창이 나와서 제목과 내용이 보이도록 만들고,
그리고, 지우는 기능도 삽입을 해서 끝내면 될 것같다.

(22.03.08)
- 오늘은 간단하게 만들어진 게시판 글을 클릭하면 창이 뜨도록 만들었다. 여기에 들어갈 요소는 게시판 내용과 게시판 제목이다. 그리고 이안에 게시글 지우기도 넣어볼까한다.

(22.03.09)
- 오늘은 게시판글을 작성하고, 작성된 게시판 글을 클릭했을때, 모달창이 나타나고, 해당 게시판의 제목과 해당 게시판의 내용이 나타나도록 만들었다. 이로써 게시판을 만들고 게시글을 여는것 까지 완성이 되었다. 내일은 게시글 모달창을 좀 꾸미고,
게시글 삭제 기능을 만들면 될것 같다. 또, 더 만들면 좋은게 있긴한데 예를들어 게시판의 게시글이 10개이상이 된다면, 새로운 창이 생겨서 < 1 2 3 > 이런식의 버튼을 만들까 생각중인데, 벌써부터 머리가 복잡해진다. 일단, 지우기 기능을 만들고, 생각 해봐야겠다.

(22.03.10)
- 오늘은 약속이 급하게 생겨서 코딩을 많이 못했다. 거의 건들기만 했는데, 게시물 remove기능을 구상하고 만들어 보는 과정에서 끝이났다. 내일은 이 기능을 완성 시켜야겠다.

(22.03.14)
- 오늘은 게시판 지우기 기능을 만들려고 했는데, 결과적으로 만들지 못했다. 일단 거의 완성이 됬는데, 기능 하나만 됬으면 만들어진거였다. 해당 게시글의 내용을 가져와서 본 스토리지에서 빼면되는데 그게 안된다. splice기능을 이용했는데 전체가 지워져셔 말썽이다.
이 기능만 된다며 아마도 지우기 기능은 끝나지 않을까 싶다. 그러면 전체적인 기능은 완성이고, 오늘 cog도 수정했고, 사용해보면서 나머지 버그들을 찾아서 수정하면 될 것같다.

(22.03.15)
- 오늘은 게시판 지우기 기능을 만들었다. 일단 기능은 되는데 버그가 하나 있긴하다. 하지만 그 버그 하나만 찾아서 고치면 될것같다. 일단 지우는 기능 자체는 만들만했지만, 예를 들어서 3개의 게시글이 있다면, 넘버가 1 2 3 이렇게 되는데 2를 지우면 1 3이 남아서 초기화
되서 1 2가 되어야 하는데, 1 3으로 남는다. 이걸 초기화 하려면 저장 되어있는 스토리지 벨류를 변경해야한다. 그래서 저장된 스토리지를 가져와서 replace를 했다. 그리고 안에 넘버를 바꾸고 넣었는데 오류가 있었다. 그래서 이 오류만 해결하면 될 것 같다.

(22.03.16)
- 오늘은 게시판 지우기 기능을 만들었다. 일단, 어제 불안정하게 만들어 놓은 스토리지 지우기 기능은 잠시 지워놓고, 엘리먼트가 지워지도록 만들었다. 방법은 이전에 게시판을 만들때 생각해보니까 넘버를 클래스로 부여했었다. 그래서, 그 클래스를 사용해서 특정 엘리먼트를
찾을 수 있었다. 그리고 스토리지에 저장해놓은 넘버를 사용해서 현재 게시판의 특정 게시물을 삭제 할 수 있었다. 그래서 이제는 어제 만들 스토리지도 같이 삭제하는 기능을 다시 만들면 끝날 것 같다.

(22.03.17)
- 오늘은 컨디션이 좋지 않아서 코딩을 많이하지 못했다. 일단, 어제 만들어 놓은것에서 게시물의 넘버가 엘리먼트가 지워지면 초기화 되도록했고, 엘리먼트가 지워지면 스토리지도 지워져야하는데, 만들다가 말았다. 내일은 무조건 완성이다. 그리고, 추가 기능을 넣을지 생각해봐야겠다.

(22.03.18)
- 오늘은 게시물을 만들고 지우는 기능까지 만들었다. 처음에는 특정 게시물을 지우면 그 게시물에 대한 스토리지 정보만 지워지고, 엘리먼트가 안지워졌는데, 다음에는 스토리지가 안되고 엘리먼트가 지워져서 고생을 했지만, 결국 만들었다. 일단 만들면서 느낀점은 게시물 처음에 만들때는
코드도 잘 짜여지고, 정리가 잘 됬는데 후반으로 넘어오면서 정신도 없고 기능을 만들기 급급했다. 그리고 또 중요하게 느낀점은 레이아웃이다. 처음부터 완벽하게 레이아웃을 만들면 중간에 코드를 수정하는 일이 줄어든다. 그리고, 이번에는 스크립트 파일 하나에 모두 작성을 했는데, 원래
하던대로 객체로 묶어서 그러니까 class로 만들어서 하는게 좋을 것 같은 생각도 들었다. 거의 세달이 걸렸는데 좋은 경험이였다. 수정하고, 또 편의기능을 더 추가하면 좋을것 같다. 맘같으면 더 깔끔하고 더 완벽하게 다시 만들고 싶은데, 시간이 걸리니까 지금 만든 코드에서 편의기능 추가나
스타일 정도만 조금씩 건들고 마무리를 지어야겠다. 다음은 클론코딩 하나 할까 생각중이다. 사실 약 1년 반정도 코딩을 하면서 제대로 클론코딩을 한 적이 없다. 그 이유는 따라 만들다보면 슬라이더나, 모달창, 공지사항, 메뉴, 버튼 등.. 기능적인 부분에서 항상 막혔기 때문이다.
그래서 왠만한 기능들을 만들수 있는 실력이 되고나서 클론코딩을 하고싶었다. 사실 지금도 많이 부족하지만, 현재 실력으로 클론코딩을 하면 금방 만들것 같다. 다음은 말한대로 클론코딩하나 만들거고, 현재 게시판도 수정하면서 할 생각이다. 긴시간 투자한 만큼 많이 배운것같다.