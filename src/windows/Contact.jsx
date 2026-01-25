import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact" />
            <div className="pl-2">
                <h2>Contact Me</h2>
            </div>
        </div>
        <div className="p-5 space-y-5">
            <img src="/images/Aayush-1.jpg" alt="Aayush" className="w-20 rounded-full"/>
            <h3>Let's Connects</h3>
            <p>GOt an Idea? A bug to squash? Or just wanna  talk tech? I'm in.</p>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow