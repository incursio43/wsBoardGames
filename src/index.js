import app from './app'
import connection from '../db/mysql'
//settings 
app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})

