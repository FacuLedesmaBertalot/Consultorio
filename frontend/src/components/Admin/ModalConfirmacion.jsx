
const ModalConfirmacion = ({ isOpen, onClose, onConfirm}) => {
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start mb-4">
                        <div className="bg-red-50 text-red-500 p-3 rounded-full border border-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-2">¿Cancelar este turno?</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Esta acción no se puede deshacer y el paciente no será notificado automáticamente. ¿Estás seguro de continuar?
                    </p>
                </div>
                
                <div className="bg-slate-50 p-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 border-t border-slate-100">
                    <button 
                        onClick={onClose}
                        className="bg-white text-slate-600 border border-slate-200 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-100 transition-colors w-full sm:w-auto text-sm hover:cursor-pointer"
                    >
                        Mantener turno
                    </button>
                    <button 
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-sm shadow-red-500/30 w-full sm:w-auto text-sm hover:cursor-pointer"
                    >
                        Sí, cancelar
                    </button>
                </div>
            </div>
        </div>
  )
}

export default ModalConfirmacion