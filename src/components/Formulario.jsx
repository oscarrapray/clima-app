import React from 'react'

const Formulario = () => {

    return (
        <form
            
        >

            <label htmlFor="ciudad">Ciudad</label>
            <input 
                type="text"
                name="ciudad"
                id="ciudad"
                
            />
            <label htmlFor="pais">pais</label>
            <select 
              name="pais"
              id="pais"
              
            >
            <option value="">-- Seleccione un país --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
            </select>
            <button type="submit" value="Buscar Clima" className="btn_enviar">Enviar</button>
        </form>
    )
}

export default Formulario