export type A = {
	id: string
	acc?
}

export type Q = string|null;

export default class {

	// static Mutation = {
	// 	async updateUser(name: string, id: string){
	// 		return {
	// 			id,
	// 			name
	// 		}
	// 	}
	// }

	static Query = <const>{
		// user(_, {id, acc}: {id: string, acc?}, ctx){
		// user(_, tp: A, ctx){
		// 	return {
		// 		id,
		// 		name: "userName" as string
		// 	}
		// },

		// multiReturnWithExplicit(_, tp, ctx){
		// 	if(true){
		// 		return null;
		// 	}
		// 	return "hello" as string;
		// },
		// multiReturnWithoutExplicit(_, tp, ctx){
		// 	if(true){
		// 		return null;
		// 	}
		// 	return "hello";
		// },

		// explicitStringOrNull(_, tp, ctx){
		// 	return "hello" as string|null
		// },
		// explicitStringOrUndefined(_, tp, ctx){
		// 	return "hello" as string|undefined;
		// },
		string(_, tp, ctx){
			return "hello";
		},
		explicitString(_, tp, ctx){
			return "hello" as string;
		},

		null(_, tp, ctx){
			return null;
		},
		undefined(_, tp, ctx){
			return undefined;
		},
		void(_, tp, ctx){},
		emptyReturn(){return},
		// nullOrUndefined(){
		// 	return null as null|undefined;
		// }

		// typeOrNull(_, tp, ctx){
		// 	let a : Q = null;
		// 	return a;
		// }
	}


}
