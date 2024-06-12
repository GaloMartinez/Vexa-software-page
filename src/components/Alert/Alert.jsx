import './Alert.css';

const Alert = ({alert}) => {
    return (
        <div className={`${ alert.error ? 'custom-alert' : 'custom-alert sky' }`}>{alert.msg}</div>
    )
}

export default Alert
