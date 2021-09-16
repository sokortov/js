// 1 exercise, about using variable before declaration
try {
    console.log(a);
    let a = 3;
} catch (err) {
    console.log('let перед использованием нужно объявить');
};

// 2 exercise, about division by zero
try {
    var result = 1/0;
    
    if (!isFinite(result)) {
      throw new SyntaxError('На ноль делить нельзя');
    };
    
} catch (err) {
    console.log(err.message);
};
