import React from "react";

function Footer() {
    let year = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center mt-5">
                <p>© {year} MyNotes. All Rights Reserved | Terms And Conditions</p>
                <div> Developed By Kamlesh Banewar </div>
            </footer>
        </>
    );
}

export default Footer;
