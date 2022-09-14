# Portfolio
Photographer's portfolio – это учебный проект подготовительного курса школы Rolling Scopes School, в ходе выполнения которого сверстан landing page портфолио фотографа.

[Демо](https://kirsawka.github.io/photographer-s-portfolio)

![image](https://user-images.githubusercontent.com/83959481/190123702-514af45f-c7ee-4760-b43b-f1393a89e45d.png)


## Ключевые навыки:
- валидная семантическая адаптивная вёрстка
- легкоподдерживаемый читаемый код
- экспорт стилей и графики из Figma
- использование JavaScript для реализации указанного в задании функционала

## Этапы работы над проектом:
1. Фиксированная вёрстка.    
  В этой части задания необходимо было сверстать страницу по [макету](https://www.figma.com/file/1A1SJ7FYyMUiBqhU3WUiBI/Portfolio?node-id=0%3A1), которая корректно отображается при ширине экрана не меньше 1440рх. Проверялась
валидность и семантичность вёрстки, её совпадение с макетом. Допускалось отклонение вёрстки от макета до 10px по горизонтали и вертикали, если соблюдается визуальное сходство вёрстки и макета. В качестве инструмента для проверки соответствия вёрстки макету использовалось расширение PerfectPixel.
2. Адаптивная вёрстка.  
  В этой части задания требовлось добавить адаптивность свёрстанной странице. При ширине страницы 768рх ставилась задача совпадения вёрстки с макетом, на 
остальных разрешениях до 320рх включительно достаточно было обеспечить отсутствие горизонтальной полосы прокрутки.
Также на этом этапе в вёрстку добавилось адаптивное меню, для создания которого использован JavaScript.
3. Добавление функционала.  
  В этой части задания использован JavaScript для добавления странице интерактивности:
- смена изображений в секции portfolio
- перевод страницы на два языка (с сохранением выбранного значения при перезагрузке страницы)
- возможность переключения светлой и тёмной темы (с сохранением выбранного значения при перезагрузке страницы)
- создание кастомного видеоплеера:
   - запуск или остановка проигрывания видео кликом по кнопке Play/Pause
   - прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка
   - управление громкостью звука при перемещении ползунка регулятора громкости. Разный цвет регулятора громкости звука до и после ползунка
   - включение или отключение звука кликом по кнопке Volume/Mute
   - управление воспроизведением видео кнопкой Play/Pause в центре видео
