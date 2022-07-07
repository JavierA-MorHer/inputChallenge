import '../ui/ui.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      
      <h3 className='title'>Created by: Javier</h3>

      <div className='list'>
        <a href='#' className='item'>Colors </a>
        <a href='#' className='item'>Typografy </a>
        <a href='#' className='item'>Spaces </a>
        <a href='#' className='item '>Buttons </a>
        <a href='#' className='item item-selected'>Inputs </a>
        <a href='#' className='item'>Grid </a>
      </div>

    </div>
  )
}
