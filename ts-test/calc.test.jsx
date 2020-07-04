let cacl = require('../src/calc'); //导入要测试的文件
//console.log("cacl = ", cacl);
describe('测试calc类的方法',()=>{
    //第一个测试用类
  test("1+1 =2 ", () => {
       expect(cacl.sum(1,1)).toBe(2)
      //expect(cacl.sum(1, 1).toBe(2));
    });

     //第二个测试用类
    test("1-1 = 0  ", () => {
       expect(cacl.minus(1, 1)).toBe(0);
    });
});
