//3월 21일 - 실습

var prompt = require('prompt');
//카멜 표기법
//변수명 시작은 소문자, 여러 단어가 이어지면 두번째 단어부터 맨 앞글자 대문자
var studentList=[
  ["홍길동1", 100, 100, 100, 300, 100],
  ["홍길동2", 90, 90, 90, 270, 90],
  ["홍길동3", 80, 80, 80, 240, 80],
  ["홍길동4", 70, 70, 70, 210, 70],
  ["홍길동5", 60, 60, 60, 180, 60]
];

prompt.start();

inputCommand()

//동기방식으로 감쌈
function inputCommand(){
  prompt.get(['command'], function(err,result){  //비동기: 다른애가 얘한테 하라고시킴
    switch (result.command) {
      case 'quit':
        console.log('안녕히가세요!')
        return; //함수 실행을 끝낸다.

      case 'list':
        console.log("[학생 목록]")
        var count = 0;
        for (var student of studentList) {
          console.log(count++ + ":" + student[0] + "," +
                      student[1] + "," +
                      student[2] + "," +
                      student[3] + "," +
                      student[4] + "," +
                      student[5]);
        }
        break;

      case  'add':
        console.log("[학생 입력]")
        prompt.get(['name', 'kor', 'eng', 'math'], function(err, result){
       //[]무엇을 입력받고 //입력받은걸로 {}무엇을 실행할지.
          var student = [result.name,
            parseInt(result.kor),
            parseInt(result.eng),
            parseInt(result.math)];
          student[4] = student[1] + student[2] + student[3]  //배열 새롭게 생성 가능
          student[5] = student[4] / 3;

          studentList[studentList.length] = student
          console.log("입력 되었습니다")
          console.log()
          inputCommand();

        })
        return; //add를 하면 입력이 안끝나도 다시 inputCommand가 떠서 return으로 함.

      case 'delete':
        console.log('[학생 삭제]')
        prompt.get(['no'], function(err, result){
          var no = parseInt(result.no)

          if (studentList.length == 0){
            console.log('삭제할 항목이 없습니다.')
            inputCommand()
            return
          }

          if (no < 0 || no >= studentList.length){
            console.log('학생 번호가 옳지 않습니다.')
            inputCommand()
            return
          }

          studentList.splice(no,1)
          console.log("삭제했습니다")
          console.log()
          inputCommand();//위가 비동기니까 이걸 괄호뒤에 쓰면 바로 실행돼서 꼬임
        })
        return; //다음명령어를 받는거는 inputCommand가 하니까
        //break하면 밖으로 나감
      default:
        console.log('해당 명령을 지원하지 않습니다')
        break;
    }
    inputCommand();  //반복

  })
}
