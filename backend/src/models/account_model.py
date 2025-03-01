# ====================================================================
# 📚 MODELO DE CUENTA - SQLAlchemy
# ====================================================================
# ! Importamos librerías necesarias
from app import db

class Account(db.Model):
    __tablename__ = 'accounts'

    # 🎯 Definición de los campos de la tabla
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    tipo = db.Column(db.Enum('banco', 'efectivo', 'billetera', name='tipo_enum'), nullable=False)
    saldo = db.Column(db.Decimal(15, 2), nullable=False, default=0.00)
    moneda = db.Column(db.Enum('ARS', 'USD', name='moneda_enum'), nullable=False)

    user = db.relationship('User', backref=db.backref('accounts', lazy=True))

    def __repr__(self):
        return f'<Account {self.nombre}, Saldo: {self.saldo} {self.moneda}>'

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'nombre': self.nombre,
            'tipo': self.tipo,
            'saldo': str(self.saldo),
            'moneda': self.moneda
        }
