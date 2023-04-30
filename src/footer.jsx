import './App.css';

const Year = new Date().getFullYear();

function Footer() {
    return <div>
        <footer className="footer">
           <p> Copyright ΌMΟRFΟ {Year} </p> 
        </footer>
    </div>
}

export default Footer;