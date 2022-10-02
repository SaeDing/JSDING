const quotes = [
    {
quote: "해야 할 일이라면 하기 싫어도 해라 감정은 사라지고 결과만 남는다",
author: "[랜덤 아무말1]"
},
{
    quote: "될 것 같다고 말해주는 누군가가 있다면 그 힘으로 인생이 굴러가기도 한다. 그리고 그 누군가가 나일 때 가장 힘이 세다",
author: "<외로운 것들에 지지 않으려면> 강송희"
},
{
    quote: "불가능이라고 누가 말하지도 않았는데 포기하지 말자",
    author: "[랜덤 아무말3]"
},
{
    quote: "하루에 2시간만 일 할 수 있다면 무엇을 하겠는가?",
    author: "[랜덤 아무말4]"
},
{
    quote: "지구는 경제로 돌아간다",
    author: "[랜덤 아무말5]"
},
{
    quote: "배움에 돈을 아끼지 말자",
    author: "[랜덤 아무말6]"
},
{
    quote: "하고 싶은 것 보다 해야 할 걸 먼저 하라",
    author: "[랜덤 아무말7]"
},

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayquote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todayquote.quote;
author.innerText = todayquote.author;