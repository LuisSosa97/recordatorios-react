import { useState } from "react";
import { supabase } from "../../config/supabaseClient";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { cyan } from "@mui/material/colors";
import * as React from "react";
import TextField from '@mui/material/TextField';

import Stack from "@mui/material/Stack";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box rounded={"lg"} boxShadow={"lg"} p={8} position={"center"}>
      <div className="row flex flex-center">
        <div className="col-6 form-widget">
          <h1 className="header">Iniciar Sesión</h1>
          <p className="description">
            Inicie sesión a través del enlace mágico con su correo electrónico a
            continuación
          </p>
          <div>
          <TextField className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} label="Correo" variant="outlined" />
          </div>
          <br />
          <div>
            <Stack>
              <Button
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email);
                }}
                className={"button block"}
                disabled={loading}
                sx={{ bgcolor: cyan[700] }}
              >
                {loading ? (
                  <span>Cargando</span>
                ) : (
                  <span>Enviar enlace mágico</span>
                )}
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </Box>
  );
}
