class Person {
    city = 'Shanghai'; // å¬å¼å±æ§
    country = `ð¨ð³ð¨ð³ð¨ð³`;

    #mobile = 'xxx-xxxx-xxxx'; // ç§æå±æ§ï¼å®ä¾æ æ³è®¿é®

    constructor(name, age) {
        console.log(
            'éè¿ new.target å¯ç¡®å®æé å½æ°æ¯å¦ä½è°ç¨çï¼ä¹å¯ç¦æ­¢å®ä¾åï¼ä»ç¨æ¥ç»§æ¿ï¼ç¸å½äºabstractå³é®å­ï¼',
            new.target === Person
        );

        this.name = name;
        this.age = age;
    }

    get info() {
        return `ä¸ªäººä¿¡æ¯ï¼å§å-${this.name}ï¼å¹´é¾-${this.age}`;
    }

    static say() {
        try {
            console.log('éææ¹æ³æå°ç§æå±æ§ ->', this.#mobile); // Uncaught TypeError: Cannot read private member #field from an object whose class did not declare it
        } catch (err) {
            console.log('[ err ]', err);
        }
    }

    say() {
        console.log('å®ä¾æ¹æ³æå°ç§æå±æ§ ->', this.#mobile);
    }
}

var personA = new Person('lqx', 30);
console.log('[ personA ]', personA);

Person.say();
personA.say();
