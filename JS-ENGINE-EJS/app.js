const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')

router.get('/', (req, res) => {
    const courses = [
        "PHP",
        "Laravel",
        "Angular",
        "React",
        "Node.js",
    ]
    res.status(200).render('index',{
        docTitle: "Welcome to JVLcode",
        courses,
        path:"index"
    });
})
router.get('/about', (req, res) => {
    const courses = [
        "PHP",
        "Laravel",
        "Angular",
        "React",
        "Node.js",
    ]
    res.status(200).render('about',{
        active: 'about',
        docTitle:'',
        courses,
        path:"about"
    })
})

router.use((req, res, next)=> {
    res.status(200).render('404', {
        docTitle: '404 Page not found',
        path:'404',
        page404: true
    })
})

app.use(router);

app.listen(8000,() => {
    console.log('Running on 8000')
})