document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.to-do__btn').onclick = addNewTask
  document.querySelector('.to-do__clear-all').onclick = clearAll

  function addNewTask() {
    const taskTitle = document.querySelector('#task').value
    const taskPriority = document.querySelector('#priority').value

    const taskAnswerDiv = document.createElement('div')
    const span = document.createElement('span')
    taskAnswerDiv.append(span)
    span.innerText = `${taskTitle} - ${taskPriority}`

    const changeBtn = document.createElement('button')
    changeBtn.innerText = 'Change'
    changeBtn.classList.add('change-btn')
    changeBtn.onclick = onTaskChange
    taskAnswerDiv.append(changeBtn)

    const delBtn = document.createElement('button')
    delBtn.innerText = 'Delete'
    delBtn.classList.add('del-btn')
    delBtn.onclick = onTaskDelete
    taskAnswerDiv.append(delBtn)

    document.querySelector('.to-do__answers').append(taskAnswerDiv)
  }
  function onTaskDelete() {
    console.log(this.parentElement)
    this.parentElement.remove()
  }
  function onTaskChange() {
    const taskDiv = this.parentElement
    taskDiv.querySelector('.change-btn').style.display = 'none'
    taskDiv.querySelector('.del-btn').style.display = 'none'

    const span = taskDiv.querySelector('span')
    const [title, priority] = span.innerText.split(' - ')
    span.innerText = ''

    const priorityInput = document.createElement('input')
    taskDiv.prepend(priorityInput)
    priorityInput.classList.add('new-priority')
    priorityInput.value = priority

    const titleInput = document.createElement('input')
    taskDiv.prepend(titleInput)
    titleInput.classList.add('new-task')
    titleInput.value = title

    const saveBtn = document.createElement('button')
    saveBtn.onclick = onSaveInput
    saveBtn.innerText = 'Save'
    taskDiv.append(saveBtn)
  }

  function onSaveInput() {
    const taskDiv = this.parentElement
    const newTitleValue = taskDiv.querySelector('.new-task')
    const newPriorityValue = taskDiv.querySelector('.new-priority')

    console.log(newTitleValue, newPriorityValue)

    const span = document.createElement('span')

    span.innerText = `${newTitleValue.value} - ${newPriorityValue.value}`

    taskDiv.prepend(span)
    newTitleValue.remove()
    newPriorityValue.remove()
    this.remove()

    taskDiv.querySelector('.change-btn').style.display = 'inline-block'
    taskDiv.querySelector('.del-btn').style.display = 'inline-block'
  }

  function clearAll() {
    const btn = this
    const list = btn.closest('.list')
    list.lastElementChild.innerHTML = ''
    console.log(list)
  }
})
