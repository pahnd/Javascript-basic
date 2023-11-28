
//JavaScript evaluates expressions from left to right. Different sequences can produce different results
// JS đánh giá biểu thức từ trái sáng phải. Khác trình tự có thể trả kết quả khác nhau
console.log(4 + 5 +'a') //9a
console.log('a' + 5 + 4) //a54

let a = 'Đây là một chuỗi'
console.log(a)
console.log(a.length)

const b = "   foo  ";
console.log(b.trim())

//Escape Character
const c = "We are the so-called \"Viking\" from the north";
console.log(c)

const d = `We are the so-called "Viking" from the north`;
console.log(d)

const e = `We are the so-called 
"Viking" from the 
north`;
console.log(e)

const f = "We are the so-called \
\"Viking\" from the \
north";
console.log(f)