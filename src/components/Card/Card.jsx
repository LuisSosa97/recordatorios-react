import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { blueGrey } from '@mui/material/colors';

export default function MultiActionAreaCard({cardid, titulo, fechacreacion, contenido, fecharecordatorio }) {
  return (
    
    <Card sx={{ marginTop:5, display: 'flow', height: '250', width: 300, bgcolor: blueGrey[200] }}>


      <CardActionArea>
        <CardContent sx={{ minWidth:250 }}>

          <Typography gutterBottom variant="body2" component="div" color="gray">
           
            Titulo:
            <Typography variant="body2" color="Black">
              {titulo}
            </Typography>
          </Typography>

          <Typography gutterBottom variant="body2" component="div" color="gray">
            Contenido:
            <Typography variant="body2" color="Black">
              {contenido}
            </Typography>
          </Typography>

          <Typography variant="body2" color="gray">
            Fecha de creacion:
            <Typography variant="body2" color="Black">
              {fechacreacion}
            </Typography>
          </Typography>
          <Typography variant="body2" color="gray">
            Fecha de Recordatorio:
            <Typography variant="body2" color="Black">
              {fecharecordatorio}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Borrar
      </Button>

<Button variant="outlined" endIcon={<SendIcon />}>
        <Link onClick={() => (window.localStorage.setItem("id", cardid))}to="/Recordatorios">
          Editar
        </Link>
      </Button>
    
      


    </Card>
  );
}



