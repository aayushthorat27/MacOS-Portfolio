import useWindowStore from '#store/window';

const WindowControls = ({ target }) => {

    const { closeWindow, maximizeWindow, minimizeWindow } = useWindowStore();
  return (
    <div id='window-controls'>
        <div className='close' onClick={() => closeWindow(target)} />
        <div className='minimize' onClick={() => minimizeWindow(target)} />
        <div className='maximize' onClick={() => maximizeWindow(target)} />
    </div>
  )
}

export default WindowControls