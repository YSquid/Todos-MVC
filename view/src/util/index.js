export const createTodo = async (todo) => {
  try {
        const res = await fetch('/api/todo/create', {
      method: 'POST',
      body: todo,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const updateTodo = async (id, form) => {
  try {
    const res = await fetch(`/api/todo/${id}`, {
      method: 'PUT',
      body: form,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const removeTodo = async (id) => {
  try {
    await fetch(`/api/todo/${id}`, {
      method: 'DELETE',
    });
    return 'deleted';
  } catch (error) {
    return { error };
  }
};
