//aplikacja, która kończy swoje działanie, jeśli użytkownik wpisze polecenie "/exit".
//W przypadku podania innego polecenia - wypisze informację "błędne polecenie".

// process.stdin.setEncoding('utf-8'); //ustawienie enkodowania (inaczej beda odczytywane jako dane szesnastkowe)
// //teraz: string z kodowaniem utf-8
// process.stdin.on('readable', function() {
//     // na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...).
//     var input = process.stdin.read();
//     // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
//     if (input !== null) {
//         var instruction = input.toString().trim();
//         if (instruction === '/exit') {
//             process.stdout.write('Quitting app!\n');
//             process.exit();
//         } else if (instruction === '/version') {
//             console.log(process.versions.node);
//         } else if (instruction === '/lang') {
//             console.log(process.env.LANG);
//         } else {
//             process.stderr.write('Wrong instruction!'); //informacja o bledach w konsoli
//         }
//     }
// });

//trim() - pozbywamy się wszystkich białych znaków z przodu i za tekstem

process.stdin.setEncoding('utf-8'); //ustawienie enkodowania (inaczej beda odczytywane jako dane szesnastkowe)
//teraz: string z kodowaniem utf-8
process.stdin.on('readable', function() {
    // na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...).
    var input = process.stdin.read();
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case'/version':
                console.log(process.versions.node);
                break;
            case '/lang':
                console.log(process.env.LANG);
                break;
            default:
                process.stderr.write('Wrong instruction!'); //informacja o bledach w konsoli
            }
    }
});
