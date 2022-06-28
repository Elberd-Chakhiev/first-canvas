const canvas = document.querySelector('#c');
const ctx = canvas.getContext('2d');

const resize = () =>
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    width = canvas.width;
    height = canvas.height;
}
resize();

const settings = 
{
    opacity: 0.005,
    count: 100, 
    fps: 60,
    color: 'hsl(hue, 100%, 50%)', 
    hue: 10,
    divisionSpeed: 100,
}

const init = () => 
{
 window.requestAnimationFrame(init);
 Step();
}

let pointerX = 0;
let pointerY = 0;
const findCurPos = e => 
{
    pointerX = e.clientX;
    pointerY = e.clientY;
}
window.addEventListener('mousemove', findCurPos)


const Step = () => 
{

    for(let i = 0; i < settings.count; i++)
    {
        if(settings.hue === 180) settings.hue = 0;
        else settings.hue + (1/settings.divisionSpeed);
        
        let fillColor = settings.color.replace('hue', settings.hue);

        ctx.fillStyle = fillColor;
        ctx.fillRect( pointerX, pointerY, 10, 10);
    }
    ctx.fillStyle = `rgba(255,255,255, ${+ settings.opacity})`;
    ctx.fillRect(0,0, width, height);
}
init();