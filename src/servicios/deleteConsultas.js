//aqui añadimos el deleteConsultas porque nos va ayudar a eliminar los botones creados desde el js de consultas js
async function deleteConsulta(id) {
    try {
        const response = await fetch(`http://localhost:3001/consultas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteConsulta };