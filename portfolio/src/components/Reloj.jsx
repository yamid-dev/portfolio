import React, { useState, useEffect } from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function Reloj() {
  const [nombreDia,setNombreDia]=useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let day = date.getDay();
      let hora = date.getHours();
      const minutos = date.getMinutes();
      const segundos = date.getSeconds();
      const ampm = hora >= 12 ? 'PM' : 'AM'; 
      
      // Array con los nombres de los días de la semana
      var nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

      // Obtener el nombre del día de la semana
      setNombreDia(nombresDias[day]);

      let horaDoce = hora % 12 || 12;

      const hour = `${horaDoce < 10 ? '0' + horaDoce : horaDoce}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos} ${ampm}`;
      setTime(hour);

      let newMessage;
      if (hora >= 0 && hora < 5) {
        newMessage = "Feliz madrugada";
      } else if (hora >= 5 && hora < 12) {
        newMessage = "Buenos días";
      } else if (hora >= 12 && hora < 18) {
        newMessage = "Buenas tardes";
      } else {
        newMessage = "Buenas noches";
      }
      setMessage(newMessage);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez, al montar el componente

  return (
    <div>
      <div style={{ width: '100%', color: 'white', display: 'flex', justifyContent:'space-evenly',textAlign:'center'}}>
        <div style={{padding:'2%'}} id="reloj">
          <h2>{message}</h2>
          <div>
            <AccessTimeFilledIcon style={{ marginRight: '5px', display:'inline-block'}} />
            <div style={{display:'inline-block'}}><h5>{nombreDia},</h5></div>
            <div style={{display:'inline-block'}}><h5>{time}</h5></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reloj;
