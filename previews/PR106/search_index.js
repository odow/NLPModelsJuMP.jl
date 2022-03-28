var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [NLPModelsJuMP]","category":"page"},{"location":"reference/#NLPModelsJuMP.MathOptNLPModel-Tuple{JuMP.Model}","page":"Reference","title":"NLPModelsJuMP.MathOptNLPModel","text":"MathOptNLPModel(model, hessian=true, name=\"Generic\")\n\nConstruct a MathOptNLPModel from a JuMP model.\n\nhessian should be set to false for multivariate user-defined functions registered without hessian.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.MathOptNLSModel-Tuple{JuMP.Model, Any}","page":"Reference","title":"NLPModelsJuMP.MathOptNLSModel","text":"MathOptNLSModel(model, F, hessian=true, name=\"Generic\")\n\nConstruct a MathOptNLSModel from a JuMP model and a container of JuMP GenericAffExpr (generated by @expression) and NonlinearExpression (generated by @NLexpression).\n\nhessian should be set to false for multivariate user-defined functions registered without hessian.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.coo_sym_dot-Tuple{AbstractVector{<:Integer}, AbstractVector{<:Integer}, AbstractVector, AbstractVector, AbstractVector}","page":"Reference","title":"NLPModelsJuMP.coo_sym_dot","text":"coo_sym_dot(rows, cols, vals, x, y)\n\nCompute the product xᵀAy of a symmetric matrix A given by (rows, cols, vals) Only one triangle of A should be passed.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.parser_JuMP-Tuple{Any}","page":"Reference","title":"NLPModelsJuMP.parser_JuMP","text":"parser_JuMP(jmodel)\n\nParse variables informations of a JuMP.Model.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.parser_MOI-Tuple{Any}","page":"Reference","title":"NLPModelsJuMP.parser_MOI","text":"parser_MOI(moimodel)\n\nParse linear constraints of a MOI.ModelLike.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.parser_SAF-NTuple{8, Any}","page":"Reference","title":"NLPModelsJuMP.parser_SAF","text":"parser_SAF(fun, set, linrows, lincols, linvals, nlin, lin_lcon, lin_ucon)\n\nParse a ScalarAffineFunction fun with its associated set. linrows, lincols, linvals, lin_lcon and lin_ucon are updated.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.parser_VAF-NTuple{8, Any}","page":"Reference","title":"NLPModelsJuMP.parser_VAF","text":"parser_VAF(fun, set, linrows, lincols, linvals, nlin, lin_lcon, lin_ucon)\n\nParse a VectorAffineFunction fun with its associated set. linrows, lincols, linvals, lin_lcon and lin_ucon are updated.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.parser_linear_expression-Tuple{Any, Any, Any}","page":"Reference","title":"NLPModelsJuMP.parser_linear_expression","text":"parser_linear_expression(cmodel, nvar, F)\n\nParse linear expressions of type GenericAffExpr{Float64,VariableRef}.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.parser_nonlinear_expression-Tuple{Any, Any, Any}","page":"Reference","title":"NLPModelsJuMP.parser_nonlinear_expression","text":"parser_nonlinear_expression(cmodel, nvar, F)\n\nParse nonlinear expressions of type NonlinearExpression.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.parser_objective_MOI-Tuple{Any, Any}","page":"Reference","title":"NLPModelsJuMP.parser_objective_MOI","text":"parser_objective_MOI(moimodel, nvar)\n\nParse linear and quadratic objective of a MOI.ModelLike.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModelsJuMP.replace!-Tuple{Any, Any}","page":"Reference","title":"NLPModelsJuMP.replace!","text":"replace!(ex, x)\n\nWalk the expression ex and substitute in the actual variables x.\n\n\n\n\n\n","category":"method"},{"location":"#NLPModelsJuMP.jl-documentation","page":"Home","title":"NLPModelsJuMP.jl documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package defines a NLPModels model using MathOptInterface and JuMP.jl. This documentation is specific for this model. Please refer to the NLPModels documentation if in doubt.","category":"page"},{"location":"#Install","page":"Home","title":"Install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Install NLPModelsJuMP.jl with the following commands.","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add NLPModelsJuMP","category":"page"},{"location":"#Contents","page":"Home","title":"Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"NLPModelsJuMP is a combination of NLPModels and JuMP, as the name implies. Sometimes it may be required to refer to the specific documentation, as we'll present here only the documention specific to NLPModelsJuMP.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Pages = [\"tutorial.md\"]","category":"page"},{"location":"tutorial/#MathOptNLPModel","page":"Tutorial","title":"MathOptNLPModel","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"MathOptNLPModel","category":"page"},{"location":"tutorial/#NLPModelsJuMP.MathOptNLPModel","page":"Tutorial","title":"NLPModelsJuMP.MathOptNLPModel","text":"MathOptNLPModel(model, hessian=true, name=\"Generic\")\n\nConstruct a MathOptNLPModel from a JuMP model.\n\nhessian should be set to false for multivariate user-defined functions registered without hessian.\n\n\n\n\n\n","category":"type"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"MathOptNLPModel is a simple yet efficient model. It uses JuMP to define the problem, and can be accessed through the NLPModels API. An advantage of MathOptNLPModel over simpler models such as ADNLPModels is that they provide sparse derivates.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Let's define the famous Rosenbrock function","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"f(x) = (x_1 - 1)^2 + 100(x_2 - x_1^2)^2","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"with starting point x^0 = (-1210).","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using NLPModels, NLPModelsJuMP, JuMP\n\nx0 = [-1.2; 1.0]\nmodel = Model() # No solver is required\n@variable(model, x[i=1:2], start=x0[i])\n@NLobjective(model, Min, (x[1] - 1)^2 + 100 * (x[2] - x[1]^2)^2)\n\nnlp = MathOptNLPModel(model)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Let's get the objective function value at x^0, using only nlp.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"fx = obj(nlp, nlp.meta.x0)\nprintln(\"fx = $fx\")","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Let's try the gradient and Hessian.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"gx = grad(nlp, nlp.meta.x0)\nHx = hess(nlp, nlp.meta.x0)\nprintln(\"gx = $gx\")\nprintln(\"Hx = $Hx\")","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Let's do something a little more complex here, defining a function to try to solve this problem through steepest descent method with Armijo search. Namely, the method","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Given x^0, varepsilon  0, and eta in (01). Set k = 0;\nIf Vert nabla f(x^k) Vert  varepsilon STOP with x^* = x^k;\nCompute d^k = -nabla f(x^k);\nCompute alpha_k in (01 such that f(x^k + alpha_kd^k)  f(x^k) + alpha_keta nabla f(x^k)^Td^k\nDefine x^k+1 = x^k + alpha_kx^k\nUpdate k = k + 1 and go to step 2.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using LinearAlgebra\n\nfunction steepest(nlp; itmax=100000, eta=1e-4, eps=1e-6, sigma=0.66)\n  x = nlp.meta.x0\n  fx = obj(nlp, x)\n  ∇fx = grad(nlp, x)\n  slope = dot(∇fx, ∇fx)\n  ∇f_norm = sqrt(slope)\n  iter = 0\n  while ∇f_norm > eps && iter < itmax\n    t = 1.0\n    x_trial = x - t * ∇fx\n    f_trial = obj(nlp, x_trial)\n    while f_trial > fx - eta * t * slope\n      t *= sigma\n      x_trial = x - t * ∇fx\n      f_trial = obj(nlp, x_trial)\n    end\n    x = x_trial\n    fx = f_trial\n    ∇fx = grad(nlp, x)\n    slope = dot(∇fx, ∇fx)\n    ∇f_norm = sqrt(slope)\n    iter += 1\n  end\n  optimal = ∇f_norm <= eps\n  return x, fx, ∇f_norm, optimal, iter\nend\n\nx, fx, ngx, optimal, iter = steepest(nlp)\nprintln(\"x = $x\")\nprintln(\"fx = $fx\")\nprintln(\"ngx = $ngx\")\nprintln(\"optimal = $optimal\")\nprintln(\"iter = $iter\")","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Maybe this code is too complicated? If you're in a class you just want to show a Newton step.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"f(x) = obj(nlp, x)\ng(x) = grad(nlp, x)\nH(x) = hess(nlp, x)\nx = nlp.meta.x0\nd = -H(x) \\ g(x)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"or a few","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"for i = 1:5\n  global x\n  x = x - H(x) \\ g(x)\n  println(\"x = $x\")\nend","category":"page"},{"location":"tutorial/#OptimizationProblems","page":"Tutorial","title":"OptimizationProblems","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The package OptimizationProblems provides a collection of problems defined in JuMP format, which can be converted to MathOptNLPModel.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using OptimizationProblems.PureJuMP  # Defines a lot of JuMP models\n\nnlp = MathOptNLPModel(woods())\nx, fx, ngx, optimal, iter = steepest(nlp)\nprintln(\"fx = $fx\")\nprintln(\"ngx = $ngx\")\nprintln(\"optimal = $optimal\")\nprintln(\"iter = $iter\")","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Constrained problems can also be converted.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using NLPModels, NLPModelsJuMP, JuMP\n\nmodel = Model()\nx0 = [-1.2; 1.0]\n@variable(model, x[i=1:2] >= 0.0, start=x0[i])\n@NLobjective(model, Min, (x[1] - 1)^2 + 100 * (x[2] - x[1]^2)^2)\n@constraint(model, x[1] + x[2] == 3.0)\n@NLconstraint(model, x[1] * x[2] >= 1.0)\n\nnlp = MathOptNLPModel(model)\n\nprintln(\"cx = $(cons(nlp, nlp.meta.x0))\")\nprintln(\"Jx = $(jac(nlp, nlp.meta.x0))\")","category":"page"},{"location":"tutorial/#MathOptNLSModel","page":"Tutorial","title":"MathOptNLSModel","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"MathOptNLSModel","category":"page"},{"location":"tutorial/#NLPModelsJuMP.MathOptNLSModel","page":"Tutorial","title":"NLPModelsJuMP.MathOptNLSModel","text":"MathOptNLSModel(model, F, hessian=true, name=\"Generic\")\n\nConstruct a MathOptNLSModel from a JuMP model and a container of JuMP GenericAffExpr (generated by @expression) and NonlinearExpression (generated by @NLexpression).\n\nhessian should be set to false for multivariate user-defined functions registered without hessian.\n\n\n\n\n\n","category":"type"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"MathOptNLSModel is a model for nonlinear least squares using JuMP, The objective function of NLS problems has the form f(x) = tfrac12F(x)^2, but specialized methods handle F directly, instead of f. To use MathOptNLSModel, we define a JuMP model without the objective, and use NLexpressions to define the residual function F. For instance, the Rosenbrock function can be expressed in nonlinear least squares format by defining","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"F(x) = beginbmatrix x_1 - 1 10(x_2 - x_1^2) endbmatrix","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and noting that f(x) = F(x)^2 (the constant frac12 is ignored as it doesn't change the solution). We implement this function as","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using NLPModels, NLPModelsJuMP, JuMP\n\nmodel = Model()\nx0 = [-1.2; 1.0]\n@variable(model, x[i=1:2], start=x0[i])\n@NLexpression(model, F1, x[1] - 1)\n@NLexpression(model, F2, 10 * (x[2] - x[1]^2))\n\nnls = MathOptNLSModel(model, [F1, F2], name=\"rosen-nls\")\n\nresidual(nls, nls.meta.x0)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"jac_residual(nls, nls.meta.x0)","category":"page"},{"location":"tutorial/#NLSProblems","page":"Tutorial","title":"NLSProblems","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"The package NLSProblems provides a collection of problems already defined as MathOptNLSModel.","category":"page"}]
}
