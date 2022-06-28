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
    opacity: 0.1,
    count: 100, 
    fps: 60,
    color: 'hsl(hue, 100%, 50%)', 
    hue: Number(document.getElementById('hue').value),
    divisionSpeed: 100,
}
const init = () => 
{
 window.requestAnimationFrame(init);
 Step();
}

let pointerX = 0;
let pointerY = 0;
let count = 0;
const findCurPos = e => 
{
    pointerX = e.clientX;
    pointerY = e.clientY;
}


document.getElementById('set').addEventListener('click', () => {settings.hue = Number(document.getElementById('hue').value)});
window.addEventListener('mousemove', findCurPos);
window.addEventListener('pointermove', findCurPos);


const Step = () => 
{

    let circle = new Path2D();
    circle.arc(pointerX, pointerY, 25, 0, 2 * Math.PI);
    ctx.fillRect( pointerX, pointerY, 10, 10);

    circle.moveTo(pointerX, pointerY);

    

    for(let i = 0; i < settings.count; i++)
    {
        if(settings.hue === 180) settings.hue = 0;
        else settings.hue + (1/settings.divisionSpeed);
        
        let fillColor = settings.color.replace('hue', settings.hue);

        ctx.fillStyle = fillColor;

        ctx.fill(circle);
    }
    ctx.fillStyle = `rgba(255,255,255, ${+ settings.opacity})`;
    ctx.fillRect(0,0, width, height);
}
init();