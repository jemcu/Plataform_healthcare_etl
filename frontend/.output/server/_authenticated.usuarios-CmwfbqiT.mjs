import { i as __toESM } from "./_runtime.mjs";
import { n as ApiError, r as apiFetch } from "./_ssr/api-BitsYYWI.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { n as useAuth } from "./_ssr/auth-Bd3rz0gB.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { t as Button } from "./_ssr/button-PJVP9td7.mjs";
import { D as Check, E as ChevronDown, T as ChevronUp, l as Plus, n as Users, o as Trash2, p as LoaderCircle, t as X } from "./_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "./_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "./_libs/@radix-ui/react-select+[...].mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.usuarios-CmwfbqiT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function UsersPage() {
	const { user } = useAuth();
	const isAdmin = (user?.role || "").toLowerCase().includes("admin");
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		username: "",
		email: "",
		password: "",
		role: "user",
		first_name: "",
		last_name: ""
	});
	const [saving, setSaving] = (0, import_react.useState)(false);
	const load = async () => {
		setLoading(true);
		try {
			const data = await apiFetch("/auth/usuarios/");
			setRows(Array.isArray(data) ? data : data.results ?? []);
		} catch (err) {
			const msg = err instanceof ApiError ? err.message : "Error cargando usuarios";
			toast.error(msg);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (isAdmin) load();
		else setLoading(false);
	}, [isAdmin]);
	const create = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			await apiFetch("/auth/usuarios/", {
				method: "POST",
				body: JSON.stringify(form)
			});
			toast.success("Usuario creado");
			setOpen(false);
			setForm({
				username: "",
				email: "",
				password: "",
				role: "user",
				first_name: "",
				last_name: ""
			});
			load();
		} catch (err) {
			const msg = err instanceof ApiError ? err.message : "Error creando usuario";
			toast.error(msg);
		} finally {
			setSaving(false);
		}
	};
	const remove = async (id) => {
		if (!confirm("¿Eliminar este usuario?")) return;
		try {
			await apiFetch(`/auth/usuarios/${id}/`, { method: "DELETE" });
			toast.success("Usuario eliminado");
			setRows((r) => r.filter((u) => u.id !== id));
		} catch (err) {
			const msg = err instanceof ApiError ? err.message : "Error al eliminar";
			toast.error(msg);
		}
	};
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Acceso restringido" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Solo los administradores pueden gestionar usuarios." })] }) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" }), " Gestión de usuarios"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Administra las cuentas del sistema." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " Nuevo usuario"] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Crear usuario" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: create,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Usuario" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.username,
								onChange: (e) => setForm({
									...form,
									username: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Nombre" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.first_name,
									onChange: (e) => setForm({
										...form,
										first_name: e.target.value
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Apellido" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: form.last_name,
									onChange: (e) => setForm({
										...form,
										last_name: e.target.value
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Contraseña" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								value: form.password,
								onChange: (e) => setForm({
									...form,
									password: e.target.value
								}),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Rol" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: form.role,
								onValueChange: (v) => setForm({
									...form,
									role: v
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "admin",
										children: "Administrador"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "medico",
										children: "Médico"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "analista",
										children: "Analista"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "user",
										children: "Usuario"
									})
								] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: saving,
							children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Crear"]
						}) })
					]
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Usuario" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Email" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Nombre" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Rol" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "text-right",
				children: "Acciones"
			})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 6,
			className: "text-center text-muted-foreground",
			children: "Sin usuarios"
		}) }) : rows.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "font-medium",
				children: u.username
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: u.email ?? "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: [u.first_name, u.last_name].filter(Boolean).join(" ") || "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "secondary",
				className: "capitalize",
				children: u.role ?? "—"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: u.is_active === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "destructive",
				children: "Inactivo"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Activo" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					variant: "ghost",
					onClick: () => remove(u.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
				})
			})
		] }, u.id)) })] }) })] })
	});
}
//#endregion
export { UsersPage as component };
