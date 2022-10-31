// Лена руководит разработкой тестирующей системы, в которой реализованы интерактивные задачи.
// До заверщения очередной стадии проекта осталось написать модуль, определяющий итоговый вердикт системы для интерактивной задачи. Итоговый вердикт определяется из кода завершения задачи, вердикта интерактора и вердикта чекера по следующим правилам:

// Вердикт чекера и вердикт интерактора — это целые числа от 0 до 7 включительно.
// Код завершения задачи — это целое число от -128 до 127 включительно.
// Если интерактор выдал вердикт 0, итоговый вердикт равен 3 в случае, если программа завершилась с ненулевым кодом, и вердикту чекера в противном случае.
// Если интерактор выдал вердикт 1, итоговый вердикт равен вердикту чекера.
// Если интерактор выдал вердикт 4, итоговый вердикт равен 3 в случае, если программа завершилась с ненулевым кодом, и 4 в противном случае.
// Если интерактор выдал вердикт 6, итоговый вердикт равен 0.
// Если интерактор выдал вердикт 7, итоговый вердикт равен 1.
// В остальных случаях итоговый вердикт равен вердикту интерактора.
// Ваша задача — реализовать этот модуль
 const getVerdict = (taskCode, interactorVerdict, checkerVerdict) => {
        taskCode = parseInt(taskCode)
        interactorVerdict = parseInt(interactorVerdict)
        checkerVerdict = parseInt(checkerVerdict)
        let answer;
        switch (interactorVerdict) {
          case 0:
            if (taskCode !== 0) answer = 3;
            else {
              answer = checkerVerdict;
            }
            break;
      
          case 1:
            answer = checkerVerdict;
            break;
      
          case 4:
            if (taskCode !== 0) answer = 3;
            else answer = checkerVerdict;
            break;
      
          case 6:
            answer = 0;
            break;
      
          case 7:
            answer = 1;
            break;
      
          default:
            answer = interactorVerdict;
            break;
        }
        return answer

      };
});

