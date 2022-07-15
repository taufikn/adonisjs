'use strict'

const Outlet = use('App/Models/Outlet')
const { validate } = use('Validator')

class OutletController {

    async index({ request, response, view }) {
        const outlets = await Outlet.all()

        // return outlets
        return view.render('outlet.index', {outlets: outlets.rows})
    }

    async store({ request, response, view, session }) {
        const outlet = new Outlet()

        const rules = {
            outlet_code: 'required',
            name: 'required',
            address: 'required',
            phone: 'required',
            id_salesman: 'required'
          }

        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            session.flash({ notification: 'Data Tidak Boleh Kosong!', message: 'error' })
            return response.redirect('back')
        }

        outlet.id_outlet = request.input('outlet_code')
        outlet.name = request.input('name')
        outlet.address = request.input('address')
        outlet.phone = request.input('phone')
        outlet.id_salesman = request.input('id_salesman')
        await outlet.save()

        session.flash({ notification: 'Data Berhasil Ditambahkan!', message: 'sukses' })

        return response.route('outlets.index')

    }

    async edit({ request, response, view, params }) {
        const id = params.id
        const outlet = await Outlet.find(id)

        return view.render('outlet.edit', {outlet: outlet})
    }

    async update({ request, response, params, view }) {
        const id = params.id
        const outlet = await Outlet.find(id)

        outlet.id_outlet = request.input('outlet_code')
        outlet.name = request.input('name')
        outlet.address = request.input('address')
        outlet.phone = request.input('phone')
        outlet.id_salesman = request.input('id_salesman')

        await outlet.save()

        return response.route('outlets.index')
    }

    async delete({ request, response, params }) {
        const id = params.id
        const outlet = await Outlet.find(id)

        await outlet.delete()

        return response.route('outlets.index')
    }

}

module.exports = OutletController
