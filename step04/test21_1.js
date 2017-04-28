//3월 22일 수요일- 실습

var prompt = require('prompt');

prompt.start();

prompt.get(['command'], function(err,result){
  console.log(result.command)
})
  /*var command = result.command
  var student =
  [["홍길동1", 100, 90, 80, 270, 90],
  ["홍길동2", 100, 90, 80, 270, 90],
  ["홍길동3", 100, 90, 80, 270, 90],
  ["홍길동4", 100, 90, 80, 270, 90]];


  switch (command) {
    case 'list':
      console.log("[학생 성적 목록]")
      for( var i = 0; i< student.length ; i++ )
          console.log(i + ' : ' +  student[i] )
          console.log("-------------------------")
    break;


    case 'add':
      console.log("[학생 성적 입력]")
      prompt.start();
      prompt.get(['name', 'kor', 'eng', 'math'], function(err, result){
      var name = result.name;
      var kor = parseInt(result.kor);
      var eng = parseInt(result.eng);
      var math = parseInt(result.math);

      console.log("성적");
      console.log("name: ", name);
      console.log('국어: ', kor);
      console.log('영어: ', eng);
      console.log('수학: ', math);


      console.log('합계: ', kor + eng + math );
      console.log('평균: ', (kor + eng + math)/3 )
    });
    break;

    case 'delete':
    prompt.start();
    prompt.get(['no']), function(err, result){
      var no = parseInt(result.no)

    student.splice[no,1]
      console.log("student[no][1]" + "의 정보가 삭제되었습니다")

  }
    break;

    case 'quit':
    console.log("안녕히 가세요!")



}

});*/
