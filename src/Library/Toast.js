import React from 'react'
import Heading from '../Components/Heading'

export const Toast = () => {
    return (
        <div>
        <Heading title="Toast Message"/>
        <div className="toastDiv">
            <div class="toast">
                <p><i class="fas fa-check-circle"></i> Added to Cart...</p>
            </div>
            <div class="toast error">
                <p><i class="fas fa-times-circle"></i> Sorry! some error occured...</p>
            </div>
            <div class="toast process">
                <p><i class="fas fa-cloud-upload-alt"></i> Authenticating Details...</p>
            </div>
        </div>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522toast%2522%253E%250A%2509%253Cp%253E%253Ci%2520class%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%2520Added%2520to%2520Cart...%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522toast%2520error%2522%253E%250A%2509%253Cp%253E%253Ci%2520class%253D%2522fas%2520fa-times-circle%2522%253E%253C%252Fi%253E%2520Sorry%21%2520some%2520error%2520occured...%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522toast%2520process%2522%253E%250A%2520%2520%2520%2520%253Cp%253E%253Ci%2520class%253D%2522fas%2520fa-cloud-upload-alt%2522%253E%253C%252Fi%253E%2520Authenticating%2520Details...%253C%252Fp%253E%250A%253C%252Fdiv%253E"
            className="iframeMedium"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
        </div>
        
    )
}
