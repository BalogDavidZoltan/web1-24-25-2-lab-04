const apiUrl = 'https://nettuts.hu/jms/BalogDavidZoltan/';

export const getAll = (entity = 'products') => {
    return fetch(`${apiUrl}${entity}`)
        .then(Response => Response.json());
};

export const remove = (id = 0, entity = 'products') => {
    return fetch(`${apiUrl}${entity}/${id}`, {
        method: 'delete',
    })
    .then(Response => Response.json());
};