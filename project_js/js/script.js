function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (let i = 0; i < skills.length; i += 1) {
        console.log('Я владею: ', skills[i]);
        }
    }
    showSkills();

    function checkAge() {
        let age = prompt('Какой ваш воззраст:');
        if(age < 18) {
            alert ('Круто что ты так рано задумался о своем будущем!');
        } else {
            alert('У тебя отличные шансы стать FrontEnd dev!');
        }
    }
    checkAge()

    function calcPow(num) {
        
    }
}