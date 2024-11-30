// Load the custom Tahoma font
const style = document.createElement('style');
style.innerHTML = `
    @font-face {
        font-family: 'CustomTahoma';
        src: url('https://traphouse.cfd/windows-xp-tahoma.ttf') format('truetype');
    }
`;
document.head.appendChild(style);

// Create the alert box
function createAlertBox(titles,message) {
	new Audio('https://github.com/rozniak/xfce-winxp-tc/raw/refs/heads/master/sounds/res/exclamation.wav').play();
    // Create the alert box container
    const alertBox = document.createElement('div');
    alertBox.style.width = '400px'; // Increased width
    alertBox.style.border = '2px solid #000';
    alertBox.style.backgroundColor = '#FFFFFF';
    alertBox.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
    alertBox.style.borderRadius = '5px';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.zIndex = '1000';
    alertBox.style.display = 'none';
    alertBox.style.fontFamily = 'CustomTahoma, Tahoma, sans-serif'; // Set font to custom Tahoma

    // Create the header
    const header = document.createElement('div');
    header.style.backgroundColor = '#000080';
    header.style.color = 'white';
    header.style.padding = '5px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    
    const title = document.createElement('span');
    title.textContent = titles;
    header.appendChild(title);
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.backgroundColor = '#C0C0C0';
    closeButton.style.border = '1px solid #000';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontFamily = 'CustomTahoma, Tahoma, sans-serif'; // Set font to custom Tahoma
    closeButton.onclick = function() {
        document.body.removeChild(alertBox);
    };
    header.appendChild(closeButton);
    
    alertBox.appendChild(header);

    // Create the body
    const body = document.createElement('div');
    body.style.padding = '10px';
    body.style.display = 'flex'; // Use flexbox for icon and message
    body.style.alignItems = 'center'; // Center align items

    // Create the icon
    const icon = document.createElement('img');
    icon.src = 'https://raw.githubusercontent.com/rozniak/xfce-winxp-tc/master/icons/luna/res/32x32/dialog_info.png'; // Replace with your icon URL
    icon.style.width = '24px'; // Set icon size
    icon.style.height = '24px'; // Set icon size
    icon.style.marginRight = '10px'; // Space between icon and text

    body.appendChild(icon); // Add icon to body

    const messageText = document.createElement('span');
    messageText.textContent = message;
    body.appendChild(messageText); // Add message text to body

    alertBox.appendChild(body);

    // Create the footer
    const footer = document.createElement('div');
    footer.style.textAlign = 'center'; // Center the footer content
    footer.style.padding = '5px';
    
    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.backgroundColor = '#C0C0C0';
    okButton.style.border = '1px solid #000';
    okButton.style.cursor = 'pointer';
    okButton.style.fontFamily = 'CustomTahoma, Tahoma, sans-serif'; // Set font to custom Tahoma
    okButton.onclick = function() {
        document.body.removeChild(alertBox); // Remove the alert box
    };
    footer.appendChild(okButton);
    
    alertBox.appendChild(footer);

    // Append the alert box to the body
    document.body.appendChild(alertBox);

    // Show the alert box
    alertBox.style.display = 'block';
}

// Example usage
//

// Create the taskbar
const taskbar = document.createElement('div');
taskbar.style.cssText = 'position:fixed;bottom:0;left:0;width:100%;height:40px;background:linear-gradient(to bottom, #000080, #00004d);box-shadow:0 -2px 5px rgba(0, 0, 0, 0.5);display:flex;align-items:center;';

// Create the start button
const startButton = document.createElement('div');
startButton.style.cssText = 'width:106px;height:34px;background:transparent;cursor:pointer;position:absolute;left:0;bottom:3px;';
const buttonImage = document.createElement('img');
buttonImage.src = 'https://traphouse.cfd/download.png';
buttonImage.style.cssText = 'width:100%;height:100%;object-fit:contain;';
startButton.appendChild(buttonImage);
taskbar.appendChild(startButton);

// Create the volume icon
const volumeIcon = document.createElement('img');
volumeIcon.src = 'https://github.com/rozniak/xfce-winxp-tc/blob/master/icons/luna/res/32x32/volume_on.png?raw=true';
volumeIcon.style.cssText = 'width:32px;height:32px;cursor:pointer;margin-left:auto;margin-right:10px;';
taskbar.appendChild(volumeIcon);

// Create the clock
const clock = document.createElement('div');
clock.style.cssText = 'color:#ffffff;margin-left:10px;font-size:14px;font-family:"Tahoma", sans-serif;';
taskbar.appendChild(clock);

// Update the clock every second
setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 1000);

const audio = new Audio('https://traphouse.cfd/Hate%20Me.mp3');
audio.play();


// Event listener for the volume icon
volumeIcon.addEventListener('click', () => {
    createAlertBox('Volume','Now playing: @saintchasergoon - Hate Me');
});

// Append the taskbar to the body
document.body.appendChild(taskbar);
