
function LessonWrap({id}) {
    return (
        <iframe
                style={{border:0}}
                loading="lazy"
                allow="fullscreen"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://proiectgrafuri${id}.netlify.app/`}>
        </iframe> 
    );
}
export default LessonWrap;