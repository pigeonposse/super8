/**
 * Todo.
 *
 * @description Todo.
 */

export const getDateString = () => {

	const currentdate = new Date() 
	currentdate.getDate() + '/'
                + ( currentdate.getMonth() + 1 ) + '/' 
                + currentdate.getFullYear() + ' @ '  
                + currentdate.getHours() + ':'  
                + currentdate.getMinutes() + ':' 
                + currentdate.getSeconds()

	return currentdate

}

export * from './browser/main'
export * from './debounce'
export * from './store/main'
export * from './data'
export * from './render'
export * from './dom'
