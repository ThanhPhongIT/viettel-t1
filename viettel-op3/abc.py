def PoissonPP( rt, Dx, Dy=None ):
	if Dy == None:
	Dy = Dx
	N = scipy.stats.poisson( rt*Dx*Dy ).rvs()
	x = scipy.stats.uniform.rvs(0,Dx,((N,1)))
	y = scipy.stats.uniform.rvs(0,Dy,((N,1)))
	P = np.hstack((x,y))
	return P

print(PoissonPP(5, 200, 300))