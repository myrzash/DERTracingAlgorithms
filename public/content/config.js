const DATAS = {
    ru: {
        title: "Трассировка алгоритма",
        grade: "8 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'Алан Купер',
            phrase: 'Чтобы стать хорошим программистом, необходимо сочувственно относиться к природе и потребностям компьютера.',
        },
        parts: [
            {
                title: 'Изучи',
                info: 'Что такое трассировка алгоритма?',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Что такое|трассировка алгоритма?',
                            subTitle: 'Трассировка|алгоритма',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                // video: 'public/video4.mp4',
                            }
                        },
                        views: [

                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/dog.gif',
                                    cover: true,
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Трассировка',
                                    text: ['Для понимания чужой программы и для проверки правильности написания своей используют метод пошагового выполнения программы с отслеживанием значений всех переменных.',
                                        'Такой процесс называется <b>трассировкой</b>.']
                                },
                            ],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Для того чтобы проверить правильность алгоритма совсем не обязательно переводить его на язык программирования и выполнять тесты на компьютере. ',
                                    'Протестировать алгоритм может и человек. Выполняя <b>ручную</b> трассировку, человек <b>моделирует</b> работу процессора, исполняя каждую команду алгоритма и занося результаты выполнения команд в специальную таблицу - <b>трассировочную</b> таблицу.',
                                    'Трассировочная таблица является моделью работы процессора при выполнении программы. Программа выполняется по шагам.']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0',
                                src: 'public/1/table1.png',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                marginClass: 'ma-0',
                                text: ['В графе «<b>Команды алгоритма</b>» отображается содержимое <b>регистра команд процессора</b>, куда помещается очередная команда. В графе «<b>Переменные</b>» отображается содержимое <b>ячеек памяти</b> компьютера (или регистров памяти процессора), отведенных под переменные величины. В графе «<b>Выполняемые действия</b>» отражаются действия, выполняемые <b>арифметико-логическим устройством</b> (АЛУ) процессора.',
                                    'Таким образом, алгоритм в совокупности с трассировочной таблицей полностью моделируют процесс обработки информации, происходящий в компьютере.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt1.png',
                                    backgroundColor: '#e46a6a'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Запомни',
                                    text: ['<b>Трассировка алгоритма</b> – пошаговое исполнение алгоритма с тестовым вариантом исходных данных',
                                        '<b>«Ручная» трассировка</b> – заполнение трассировочной таблицы',
                                        '<b>Трассировочная таблица</b> – модель работы процессора при исполнении алгоритма']
                                },
                            ],
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Демонстрация выполнения трассировки алгоритма',
                                text: ['Рассмотрим на примере решения задачи заполнение трассировочной таблицы.',
                                    'На рисунке представлен метод половинного деления в виде блок – схемы и записи на псевдокоде.']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0',
                                backgroundColor: 'white',
                                src: 'public/1/table2.png',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Предлагаем твоему вниманию реализацию «ручной» трассировки в виде заполненной трассировочной таблицы:']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0 mb-5',
                                backgroundColor: 'white',
                                src: 'public/1/table3.png',
                            },
                        ],
                    }
                }
            },
            {
                title: 'Проверь себя',
                image: 'part3.png',
                info: 'Выполни проверочную работу и выясни насколько ты усвоил материал',
                interactive:
                    {
                        name: 'cycle',
                        items: {
                            task: 'Написать программу вычисления суммы ряда <p class="text-xs-center font700 mt-2 mb-2">S = 1 + 2 + 3 + 4 + 5 + 6</p>Используй код программы для заполнения таблицу трассировки. Убедиться при трассировке, что сумма равна 21.',
                            headers: [
                                '№<br/>шага',
                                's',
                                'i',
                                'n',
                                'Выполняемые<br/>действия',
                            ],
                        }
                    }
            }
        ]
    },
    kz: {
        title: "Алгоритмді трассалау",
        grade: "8-сынып",
        typeder: "Интерактивті лекция",
        prologue: {
            author: 'Алан Купер',
            phrase: 'Жақсы программа әзірлеуші болу үшін, табиғатқа және компьютерді тұтынуға жанашырлықпен қарау қажет.'
        },
        parts: [
            {
                title: 'Үйрен',
                info: 'Алгоритмді трассалау дегеніміз не?',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Алгоритмді |трассалау дегеніміз не?',
                            subTitle: 'Алгоритмді|трассалау',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                            }
                        },
                        views: [

                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/dog.gif',
                                    cover: true,
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Трассалау',
                                    text: ['Бөгде программаны түсіну және өз программаңыздың жазылу дұрыстығын тексеру үшін барлық айнымалылардың мәндерін қадағалай отырып, программаны қадамдап орындау әдісі қолданылады.',
                                        'Мұндай процесс трассалау деп аталады.']
                                },
                            ],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Алгоритмнің дұрыстығын тексеру үшін оны программалау тіліне аудару және компьютерде тесттер орындау міндетті емес. ',
                                    'Алгоритмді адам да тестілей алады. Қолмен трассалауды орындау арқылы адам алгоритмнің әр командасын орындай және команданы орындау нәтижелерін арнайы кестеге - трассалау кестесіне енгізе отырып, процессор жұмысын модельдей алады.',
                                ]
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0',
                                src: 'public/1/table1.png',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                marginClass: 'ma-0',
                                text: ['«Алгоритм командалары» бағанында кезекті команда орналастырылатын процессор командаларының регистрінің мазмұны көрсетіледі. «Айнымалылар» бағанында айнымалы мәндерге берілген компьютер жадысы ұяшықтарының (немесе процессор жадысы регистрлерінің) мазмұны көрсетіледі. «Жасалатын әрекеттер» бағанында процессордың арифметикалық-логикалық құрылғылары (АЛҚ) орындайтын әрекеттер көрсетіледі.',
                                    'Осылайша, алгоритм трассалау кестесімен бірлесіп компьютерде орын алатын ақпараттарды өңдеу процесін толықтай модельдейді.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt1.png',
                                    backgroundColor: '#e46a6a'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Есте сақта!',
                                    text: ['<b>Алгоритмді трассалау</b> – бастапқы деректердің тестілік нұсқасымен алгоритмді қадамдап орындау',
                                        '<b>«Қолмен» трассалау</b> – трассалау кестесін толтыру',
                                        '<b>Трассалау кестесі</b> – алгоритмді орындау кезіндегі процессор жұмысының моделі']
                                },
                            ],
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Алгоритмді трассалауды орындауды көрсету',
                                text: ['Трассалау кестесін толтыру тапсырмаларын шешуді мысалмен қарастырайық',
                                    'Суретте блок – схемалар және жалған кодтағы жазбалар түріндегі жартылай бөлу әдісі көрсетілген.']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0',
                                backgroundColor: 'white',
                                src: 'public/1/table2.png',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['«Қолмен» трассалауды толтырылған трассалау кестесі түрінде іске асыруға назар аударыңыз:']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0 mb-5',
                                backgroundColor: 'white',
                                src: 'public/1/table3.png',
                            },
                        ],
                    }
                }
            },
            {
                title: 'Өзіңді тексер',
                image: 'part3.png',
                info: 'Тексеру жұмысын орында және материалды қаншалықты игергеніңді анықта',
                interactive:
                    {
                        name: 'cycle',
                        items: {
                            task: '<p class="text-xs-center font700 mt-2 mb-2">S = 1 + 2 + 3 + 4 + 5 + 6</p> қатарының қосындысын есептеу программасын жазу. Трассалау кестесін толтыру үшін программа кодын қолдан. Трассалау кезінде қосындының 21-ге тең екеніне көз жеткізіңіз',
                            headers: [
                                'Қадам<br/>№',
                                's',
                                'i',
                                'n',
                                'Жасалатын<br/>әрекеттер',
                            ],
                        }
                    }
            }
        ]
    },
    en: {
        title: "Algorithm tracing",
        grade: "Grade 8",
        typeder: "On-line lecture",
        prologue: {
            author: 'Alan Cooper',
            phrase: 'To become a good programmer it is necessary to behave towards nature and needs of computer mercifully. ',
        },
        parts: [
            {
                title: 'Learn',
                info: 'What is an algorithm tracing?',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'What is| an algorithm tracing?',
                            subTitle: 'Algorithm|tracing',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                            }
                        },
                        views: [

                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/dog.gif',
                                    cover: true,
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Tracing',
                                    text: ['Method of program stepping with value tracking of all variables is used for understanding of foreign programs and for own program’s spell check.',
                                        'This process is tracing.']
                                },
                            ],
                            {
                                name: 'm-text',
                                big: true,
                                text: ['In order to check correctness of algorithm it is no need to translate it into Algorithm Programming Language and to perform tests on computer.',
                                    'A man can test algorithm. Using manual trace a man simulates work of processor, performing each command of algorithm and recording command implementation results into a special table – trace table. ']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0',
                                src: 'public/1/table1.png',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                marginClass: 'ma-0',
                                text: ['In graph “Commands of algorithms” shows content of instruction register of processor, where next command should be allocated. In graph “Variables” shows content of memory cells of computer (or memory register of processor), allotted under variables. In graph “Performing actions” shows actions, performing by arithmetic logic unit (ALU) of processor. ',
                                    'Therefore, algorithm in coupled with trace table simulates fully data reduction process, performing in computer. ']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/kt1.png',
                                    backgroundColor: '#e46a6a'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    title: 'Remember!',
                                    text: ['Algorithm tracing is a step-by-step execution of algorithm with testing version of source data.',
                                        '«Manual» trace is filling up of trace table.',
                                        'Trace table is processor work model when algorithm implementing.']
                                },
                            ],
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Algorithm tracing implementation display',
                                text: ['Let’s consider on an example of problem-solving   filling-up of trace table.',
                                    'The picture shows method of half-interval method as blocks – schemes and records on pseudocode.']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0',
                                backgroundColor: 'white',
                                src: 'public/1/table2.png',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['We call attention to realization of “manual” tracing as filled up trace table:']
                            },
                            {
                                name: 'm-image',
                                marginClass: 'ma-0 mb-5',
                                backgroundColor: 'white',
                                src: 'public/1/table3.png',
                            },
                        ],
                    }
                }
            },
            {
                title: 'Check yourself',
                image: 'part3.png',
                info: 'Perform testing work and clear up how much you learned subject',
                interactive:
                    {
                        name: 'cycle',
                        items: {
                            task: 'Write computation program of sum of series <p class="text-xs-center font700 mt-2 mb-2">S = 1 + 2 + 3 + 4 + 5 + 6.</p> Use program code for filling up trace table. Make sure when tracing sum is equal to 21 ',
                            headers: [
                                'No.<br/>of step',
                                's',
                                'i',
                                'n',
                                'Performing<br/>actions',
                            ],
                        }
                    }
            }
        ]
    }
}