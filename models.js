const Types = {
    VOID: 'void',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
};

const Encapsulation = {
    PUBLIC: 'public',
    PRIVATE: 'private',
    PROTECTED: 'protected',
};


class Argument {
    constructor(Type, Nom) {
        this.type = Type;
        this.nom = Nom;
    }
}

class Variable {
    constructor(Encapsulation, Type, Nom) {
        this.encapsulation = Encapsulation;
        this.type = Type;
        this.nom = Nom;
    }
}

class Method {
    constructor(Nom, Type, Arguments, Encapsulation) {
        this.encapsulation = Encapsulation;
        this.type = Type;
        this.nom = Nom;
        this.arguments = Arguments;
    }
}

class Class {
    constructor(Encapsulation, Nom, Variables, Methods) {
        this.encapsulation = Encapsulation;
        this.nom = Nom;
        this.attributs = Variables;
        this.methodes = Methods;
    }
}