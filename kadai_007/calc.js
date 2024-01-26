let num = 15;

console.log(num);

// 変数numの値が３の倍数の場合、"３の倍数です"と出力する
if (num % 3 === 0) {
  console.log('3の倍数です')
}

// 変数numの値が５の倍数の場合、"５の倍数です"と出力する
if (num % 5 === 0) {
  console.log('5の倍数です')
}

// 変数numの値が３と５の倍数の場合、"３と５の倍数です”と出力する
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です')
}
// それ以外のときは、"１"を出力する
else{
  console.log('3と5の倍数ではありません')
}

