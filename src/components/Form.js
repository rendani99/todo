import styles from '../style.module.css'
const Form = () => {
  return (
    <div className={styles.todoform}>
      <input className={styles.todoinput} placeholder="Add Todo Item" />
      <button className={styles.todobutton}>Add</button>
    </div>
  )
}

export default Form
