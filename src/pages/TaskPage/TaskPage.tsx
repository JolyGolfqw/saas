import { Button } from 'shared/ui';
import { TaskNotes } from 'components/TaskNotes/TaskNotes';
import styles from './TaskPage.module.scss';

export const TaskPage = () => {
  return (
    <div className={styles.TaskPage}>
      <h1>Заголовок задачи</h1>

      <div className={styles.options}>
        <div>
          Баллы: <span>120</span>
        </div>
        <div>
          Время: <span>120 мин</span>
        </div>
      </div>

      <div className={styles.taskText}>
        <p>
          Таким образом постоянный количественный рост и сфера нашей активности
          влечет за собой процесс внедрения и модернизации позиций, занимаемых
          участниками в отношении поставленных задач. Таким образом рамки и
          место обучения кадров способствует подготовки и реализации
          существенных финансовых и административных условий. Таким образом
          постоянный количественный рост и сфера нашей активности требуют от нас
          анализа существенных финансовых и административных условий.
        </p>
        <p>
          Таким образом постоянный количественный рост и сфера нашей активности
          влечет за собой процесс внедрения и модернизации позиций, занимаемых
          участниками в отношении поставленных задач. Таким образом рамки и
          место обучения кадров способствует подготовки и реализации
          существенных финансовых и административных условий. Таким образом
          постоянный количественный рост и сфера нашей активности требуют от нас
          анализа существенных финансовых и административных условий.
        </p>
      </div>
      <Button variant="success">Взять в работу</Button>

      <TaskNotes />
    </div>
  );
};
