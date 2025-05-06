import * as productRepository from '../repositories/product.repository';

export const getAll = async () => {
    return await productRepository.findAll();
}