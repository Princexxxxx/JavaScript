class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static mobile = `13127501027`;

    static sleep(baseInfo, time) {
        console.log(`${baseInfo}：我要睡觉了，当前时间-${time}`);
    }

    get baseInfo() {
        return `个人信息：姓名-${this.name}，年龄-${this.age}`;
    }

    say() {
        console.log(this.age);
    }
}

var personA = new Person('lqx', 29);

Person.sleep(personA.baseInfo, Date.now());